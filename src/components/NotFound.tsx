import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import cat from "../assets/images/404.png";

const NotFound: FC = () => {

    const classes = useStyles();

	return (
        <Grid container justify="center" alignItems="center" className={classes.container}>
            <Grid container item sm={6} xs={12} justify="center" alignItems="center">
                <Typography variant="h3" className={classes.header}>
                    Please, check input data.
                </Typography>
            </Grid>
            <Grid container item sm={5} xs={12} justify="center" alignItems="center">
                <img src={cat} alt="not found" className={classes.image}/>
            </Grid>
        </Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 'calc(100vh - 111px)',
        },
        image: {
            width: '60%',
        },
        header: {
            color: theme.palette.text.secondary,
            [theme.breakpoints.down("xs")]: {
                fontSize: "20px",
            },
        },

    })
);
export default NotFound;
