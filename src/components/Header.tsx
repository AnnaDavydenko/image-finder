import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header: FC = () => {

    const classes = useStyles();

	return (
        <Grid container justify="space-between" alignItems="center" className={classes.header}>
            <Typography variant="h1" className={classes.title}>Image Finder</Typography>
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
