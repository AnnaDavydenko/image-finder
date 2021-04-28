import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, CardMedia, IconButton, Link, Zoom} from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import Tags from "./Tags";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

interface IProps {
    isBookmark: boolean;
    index: number;
    link: string;
    handleBookmark: (index: number) => () => void;
    imageUrl: string;
    id: string;
}

const ImageCard: FC<IProps> = (props: IProps) => {
    const {isBookmark, index, link, handleBookmark, imageUrl, id} = props;
    const classes = useStyles();

	return (
        <Grid container justify="center" alignItems="center" item md={4} xs={6} className={classes.imageContainer}>
            <Zoom in>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.mediaImage}
                        image={imageUrl}
                    />
                    <CardContent>
                        <Grid container justify="space-between" alignItems="center">
                            <Link href={link} target="_blank">
                                <LinkIcon fontSize="large" className={classes.icon} />
                            </Link>
                            <IconButton onClick={handleBookmark(index)} aria-label="bookmark">
                                {isBookmark && <BookmarkIcon fontSize="large" className={classes.icon}/>}
                                {!isBookmark && <BookmarkBorderIcon fontSize="large" className={classes.icon}/>}
                            </IconButton>
                        </Grid>
                        <Tags id={id}/>
                    </CardContent>
                </Card>
            </Zoom>
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
        icon: {
            color: theme.palette.primary.main,
        },
    })
);
export default ImageCard;
