import React, {FC, LegacyRef, useCallback, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ENTER_KEY = 'Enter';
const COMMA_KEY = ',';
const BACKSPACE_KEY = 'Backspace';

const Tags: FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    const classes = useStyles();

    const addTag = useCallback(() => {
        let tag = value.trim().replace(/,/g, "");

        if (!tag) {
            return;
        }

        setTags([...tags, tag]);
        setValue("");
    },[value, tags]);

    const editPrevTag = useCallback(() => {
        const tag = tags.pop() as string;
        setValue(tag);
        setTags([...tags]);
    },[tags]);

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

const useStyles = makeStyles({
    form: {

    },
    tags: {
        background: '#fff',
        padding: '5px',
        overflow: 'hidden',
    },
    tag: {
        color: '#fff',
        fontWeight: 'bold',
        background: '#3498db',
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
        boxSizing: 'border-box',
        color: '#7f8c8d',
        border: 0,
        float: 'left',
        margin: '10px 0',
        fontSize: '16px',
        outline: 0,
    },
});
export default Tags;
