import React, {FC, useCallback, useEffect} from 'react';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tags from "./Tags";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {Card, CardActionArea, CardContent, CardMedia, IconButton, Zoom} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {getImagesThunk, searchImagesThunk} from "../redux/images/thunk";
import {useDispatch} from "react-redux";

const SearchPage: FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // const [] = useState();

    useEffect(() => {
        dispatch(searchImagesThunk());
    },[dispatch]);

    const images = new Array(50).fill({url: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",});

    const handleClick = useCallback(() => {

    },[]);

    return (
        <Grid container direction="column" justify="space-between" alignItems="center" className={classes.container}>
            <Grid container className={classes.search}>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton onClick={handleClick} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Grid>

            <Grid container justify="center" alignItems="center">
                {images.map((image, index) => (
                    <Grid container justify="center" alignItems="center" key={index} item md={4} xs={6} className={classes.imageContainer}>
                        <Zoom in>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.mediaImage}
                                        image={image.url}
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
