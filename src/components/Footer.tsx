import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            position: 'fixed',
            bottom: 0,
            color: theme.palette.text.secondary,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontSize: '1.3rem',

            padding: '1rem',
            background: 'lightgrey',

        },
        githubIcon: {
            color: theme.palette.text.secondary,
            paddingRight: '0.5rem',
            fontSize: '23px',
            '& svg': {
                verticalAlign: 'middle',
            },
            '&:hover': {
                color: theme.palette.primary.main,
            }
        },
        githubLink: {
            color: theme.palette.text.secondary,
            outline: 'none',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
                color: theme.palette.primary.main,
            }
        },
    })
);

export default Footer;

