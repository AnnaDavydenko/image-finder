import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from "@material-ui/core";

const Footer: FC = () => {

    const classes = useStyles({});

    return (
        <footer className={classes.footer}>
                <Link
                    color="inherit"
                    href="https://github.com/AnnaDavydenko"
                    target="_blank"
                    underline="none"
                    className={classes.githubLink}
                >
                    <GitHubIcon className={classes.githubIcon}/>
                    Anna Davydenko
                </Link>
        </footer>
    );
};

const useStyles = makeStyles({
    footer: {
        // position: 'absolute',
        bottom: 0,
        color: '#3288dc',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: '1.3rem',

        padding: '1rem',
        background: 'lightgrey',

    },
    githubIcon: {
        color: '#3288dc',
        paddingRight: '0.5rem',
        '& svg': {
            verticalAlign: 'middle',
        },
    },
    githubLink: {
        color: '#3288dc',
        outline: 'none',
        textDecoration: 'none',
        '&:hover':{
            color: '#01c5f1',
        }
    },

});

export default Footer;

