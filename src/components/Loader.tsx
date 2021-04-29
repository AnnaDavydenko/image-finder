import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader: FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="primary" />
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 111px);',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    })
);
export default Loader;
