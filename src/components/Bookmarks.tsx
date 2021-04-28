import React, {FC, useCallback, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {favoritesDataSelector} from "../redux/favorites/selectors";
import ImageCard from "./ImageCard";
import {getFavoritesThunk, removeFavoritesThunk} from "../redux/favorites/thunk";

const Bookmarks: FC = () => {

    const classes = useStyles();
    const favoritesData = useSelector(favoritesDataSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoritesThunk());
    },[dispatch]);

    const handleBookmark = useCallback((index) => () => {
        dispatch(removeFavoritesThunk(favoritesData[index].id));
    },[dispatch, favoritesData]);

	return (
        <Grid container justify="center" alignItems="center">
            {favoritesData.map((imageData, index) => (
                <ImageCard
                    isBookmark={true}
                    imageUrl={imageData.image}
                    key={imageData.id}
                    id={imageData.id}
                    index={index}
                    link={imageData.link}
                    handleBookmark={handleBookmark}/>
            ))}
        </Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageContainer: {
            margin: theme.spacing(3.5, 0),
            position: 'relative',
            backgroundColor: 'cadetblue',
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
        bookmarkIcon: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
    })
);
export default Bookmarks;
