import React, {FC, useCallback} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useHistory} from "react-router";

const Header: FC = () => {

    const classes = useStyles();
    let history = useHistory();

    const handleClick = useCallback(() => {
        history.push("/");
    }, [history]);

	return (
        <Grid container justify="space-between" alignItems="center" className={classes.header}>
            <Typography variant="h1" className={classes.title} onClick={handleClick}>Image Finder</Typography>
            <AccountCircleIcon fontSize={"large"} className={classes.icon}/>
        </Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            padding: '1rem',
            background: theme.palette.background.default,
        },
        title: {
            cursor: 'pointer',
            fontSize: '2rem',
            fontWeight: 400,
            color: theme.palette.primary.main,
        },
        icon: {
            color: theme.palette.text.secondary,
            '&:hover': {
                color: theme.palette.primary.main,
            }
        },
    })
);
export default Header;
