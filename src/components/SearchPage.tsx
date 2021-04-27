import React, {ChangeEvent, FC, MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tags from "./Tags";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {Card, CardActionArea, CardContent, CardMedia, IconButton, Link, Zoom} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {searchImagesThunk} from "../redux/images/thunk";
import {useDispatch, useSelector} from "react-redux";
import {imagesDataSelector} from "../redux/images/selectors";
import {Pagination} from '@material-ui/lab';

const IMAGES_PER_PAGE = 12;

const SearchPage: FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const {totalPages, images, links} = useSelector(imagesDataSelector);

    //console.log({totalPages, images, links});

    const [value, setValue] = useState<string>("all");
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(searchImagesThunk(value, page, IMAGES_PER_PAGE));
    },[dispatch, value, page]);

    const totalPagesPagination = useMemo(() => Math.ceil(totalPages / IMAGES_PER_PAGE), [totalPages]);

    const handleChangePage = useCallback((event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }, []);

    const handleSearch = useCallback(() => {
        dispatch(searchImagesThunk(value, page, IMAGES_PER_PAGE));
    },[dispatch, value, page]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    },[]);

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        e.preventDefault();
        if (e.key === "Enter") {
            handleSearch();
        }
    }, [handleSearch]);

    useEffect(() => {
        document.addEventListener("keyup", handleKeyPress);
        return () => {
            document.removeEventListener("keyup", handleKeyPress);
        }
    }, [handleKeyPress]);

    return (
        <Grid container direction="column" justify="space-between" alignItems="center" className={classes.container}>
            <Grid container justify="space-between" alignItems="center">
                <Pagination count={totalPagesPagination} page={page} onChange={handleChangePage} variant="outlined" />
                <Grid container className={classes.search}>
                    <InputBase
                        autoFocus
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                        value={value}
                    />
                    <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                {images.map((imageData: {id: string, image: string}, index: number) => (
                    <Grid container justify="center" alignItems="center" key={imageData.id} item md={4} xs={6} className={classes.imageContainer}>
                        <Zoom in>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.mediaImage}
                                        image={imageData.image}
                                    />
                                    <BookmarkBorderIcon fontSize="large" className={classes.bookmarkIcon}/>
                                    <CardContent>
                                        <Tags />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Zoom>

                    </Grid>
                ))}
            </Grid>

        </Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: '100%',
            overflow: 'auto',
            paddingRight: '23px',
        },
        imageContainer: {
            margin: theme.spacing(3.5, 0),
            position: 'relative',
            backgroundColor: 'cadetblue',
        },
        bookmarkIcon: {
          position: 'absolute',
          top: 0,
          right: 0,
        },
        card: {
            maxWidth: theme.spacing(60),
        },
        mediaImage: {
            height: theme.spacing(30),
            transition: 'all .5s',
            '&:hover': {
                transform: 'scale(1.2)',
                backgroundPositionY: '-18px',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            marginTop: theme.spacing(1),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 'auto',
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        iconButton: {
            padding: 10,
        },
    })
);
export default SearchPage;
