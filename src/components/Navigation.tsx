import React, {FC, useCallback} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const Navigation: FC = () => {

    const classes = useStyles();
    let history = useHistory();

    const handleFinder = useCallback(() => {
        history.push("/");
    }, [history]);

    const handleBookmarks = useCallback(() => {
        history.push("/bookmarks");
    }, [history]);

	return (
        <Grid container direction="column" justify="space-around" alignItems="center" className={classes.navigation}>
            <button
                className={classes.navigationBtn}
                onClick={handleFinder}
                type="button"
            >
                <ImageSearchIcon fontSize="large" className={classes.icon}/>
            </button>
            <button
                className={classes.navigationBtn}
                onClick={handleBookmarks}
                type="button"
            >
                <BookmarksIcon className={classes.icon}/>
            </button>
        </Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navigation: {
            padding: '0.5rem',
            width: '6rem',
            height: '100%',
            backgroundColor: theme.palette.background.default,
        },
        navigationBtn: {
            background: 'transparent',
            border: 0,
            outline: 'none',
            cursor: 'pointer',
            listStyle: 'none',
            transition: 'all 0.5s ease-out',
            "&:active": {
                transform: 'scale(0.8)',
            },
        },
        icon: {
            color: theme.palette.text.secondary,
            '&:hover': {
                color: theme.palette.primary.main,
            }
        },
    })
);
export default Navigation;
