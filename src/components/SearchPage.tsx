import React, {ChangeEvent, FC, useCallback, useEffect, useMemo, useState} from 'react';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import {searchImagesThunk} from "../redux/images/thunk";
import {useDispatch, useSelector} from "react-redux";
import {getImagesData, imagesDataSelector} from "../redux/images/selectors";
import {addFavoritesThunk, removeFavoritesThunk} from "../redux/favorites/thunk";
import ImageCard from "./ImageCard";
import PaginationComponent from "./PaginationComponent";
import {favoritesDataSelector} from "../redux/favorites/selectors";
import {IFavorite} from "../common/types";
import Loader from "./Loader";

import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from "@material-ui/core";
import NotFound from "./NotFound";

const IMAGES_PER_PAGE = 6;

const SearchPage: FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const favoritesData = useSelector(favoritesDataSelector);
    const imagesData = useSelector(getImagesData);
    const {totalPages, images, links} = useSelector(imagesDataSelector);

    const [value, setValue] = useState<string>("all");
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        dispatch(searchImagesThunk(value, page, IMAGES_PER_PAGE));
    },[dispatch, value, page]);

    const handleChangePage = useCallback((event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }, []);

    const displayImages = useMemo(() => {
        return images.map((imageItem) => {
            imageItem.isBookmark = !!favoritesData.find((item: IFavorite) => item.id === imageItem.id);
            return imageItem;
        });
    }, [favoritesData, images]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    },[]);

    const handleBookmark = useCallback((index) => () => {
        const bookmark = favoritesData.find((item: IFavorite) => item.id === images[index].id);
        if (bookmark) {
            dispatch(removeFavoritesThunk(images[index].id));
        } else {
            dispatch(addFavoritesThunk({id: images[index].id, image: images[index].image, link: links[index]}));
        }
    },[dispatch, images, links, favoritesData]);

    const handleSearch = useCallback(() => {
        dispatch(searchImagesThunk(value, page, IMAGES_PER_PAGE));
    },[dispatch, value, page]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.key === "Enter") {
            handleSearch();
        }
    }, [handleSearch]);

    return (
        <>
        {!images.length && imagesData.isLoading ? (<Loader/>) : (
            <Grid container direction="column" justify="space-between" alignItems="center" className={classes.container}>
                    <Grid container justify="flex-end" alignItems="center">
                        <Grid container className={classes.search}>
                            <InputBase
                                autoFocus
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onKeyUp={handleKeyPress}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChange}
                                value={value}
                            />
                            <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    { !images.length && !imagesData.isLoading ? (<NotFound/>) : (
                        <>
                            <Grid container justify="center" alignItems="center">
                                {displayImages.map((imageData, index) => (
                                    <ImageCard isBookmark={imageData.isBookmark as boolean}
                                               key={imageData.id}
                                               id={imageData.id}
                                               imageUrl={imageData.image}
                                               index={index}
                                               link={links[index]}
                                               handleBookmark={handleBookmark}/>
                                ))}
                            </Grid>
                            <PaginationComponent totalPages={totalPages} ImagesPerPage={IMAGES_PER_PAGE} page={page}
                            handleChangePage={handleChangePage}/>
                        </>
                    )}

                </Grid>)}
        </>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: '100%',
            overflow: 'auto',
            paddingRight: '23px',
        },
        search: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.5),
            },
            marginTop: theme.spacing(1),
            [theme.breakpoints.up('xs')]: {
                width: 'auto',
            },
        },
        inputRoot: {
            color: theme.palette.text.secondary,
            fontSize: '16px',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        iconButton: {
            padding: 10,
        },
    })
);
export default SearchPage;
