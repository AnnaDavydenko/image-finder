import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header: FC = () => {

    const classes = useStyles();

	return (
        <Grid container justify="space-between" alignItems="center" className={classes.header}>
            <Typography variant="h1" className={classes.title}>Image Finder</Typography>
            <AccountCircleIcon fontSize={"large"}/>
        </Grid>
	);
};

const useStyles = makeStyles({
    header: {
        padding: '1rem',
        background: 'lightgrey',
    },
    title: {
        fontSize: '2rem',
    },
});
export default Header;
