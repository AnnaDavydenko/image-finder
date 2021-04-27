import React, {FC, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
                <ImageSearchIcon className={classes.icon}/>
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

const useStyles = makeStyles({
    navigation: {
        padding: '0.5rem',
        width: '6rem',
        height: '100%',
        backgroundColor: 'aquamarine',
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
        color: '#ffffff',
        fontSize: '35px',
    },
});
export default Navigation;
