import React, {FC, useCallback, useState} from 'react';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {taggedImagesSelector} from "../redux/tags/selectors";
import {addTagToImageThunk, removeTaggedImagesThunk} from "../redux/tags/thunk";
import {ITaggedImages} from "../common/types";

const ENTER_KEY = 'Enter';
const COMMA_KEY = ',';
const BACKSPACE_KEY = 'Backspace';

const Tags: FC<{id: string}> = (props: {id: string}) => {
    const {id} = props;
    const taggedImages = useSelector(taggedImagesSelector);
    const image = taggedImages.find((item: ITaggedImages) => item.id === id);

    const [tags, setTags] = useState<string[]>(image?.tags || []);
    const [value, setValue] = useState<string>("");
    const dispatch = useDispatch();


    const classes = useStyles();

    const addTag = useCallback(() => {
        let tag = value.trim().replace(/,/g, "");

        if (!tag) {
            return;
        }

        setTags([...tags, tag]);
        setValue("");
        dispatch(addTagToImageThunk(tag, id));
    },[dispatch, value, tags, id]);

    const editPrevTag = useCallback(() => {
        const tag = tags.pop() as string;
        setValue(tag);
        setTags([...tags]);
        dispatch(removeTaggedImagesThunk(tag, id));
    },[dispatch, id, tags]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    },[]);

    const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === ENTER_KEY || e.key === COMMA_KEY) {
            addTag();
        }
    },[addTag]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === BACKSPACE_KEY && !value) {
            editPrevTag();
        }
    },[value, editPrevTag]);

    return (
        <div className={classes.form}>
            <div className={classes.tags}>
                <ul>
                    {tags.map((tag, i) => (
                        <li key={tag + i} className={classes.tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Add tag..."
                    value={value}
                    onChange={handleChange}
                    className={classes.input}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {},
        tags: {
            color: theme.palette.background.paper,
            padding: '5px',
            overflow: 'hidden',
            minHeight: '130px',
            width: '200px',
        },
        tag: {
            color: theme.palette.background.paper,
            fontWeight: 'bold',
            background: theme.palette.text.primary,
            float: 'left',
            padding: '5px 10px',
            borderRadius: '10em',
            margin: '5px',
            "& button": {
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
            },
        },
        input: {
            padding: '5px 10px',
            backgroundColor: theme.palette.background.paper,
            margin: '10px 0',
            fontSize: '16px',
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.5),
            },
        },
    })
);
export default Tags;
