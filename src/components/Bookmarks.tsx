import React, {ChangeEvent, FC, useCallback, useEffect, useMemo, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {favoritesDataSelector} from "../redux/favorites/selectors";
import ImageCard from "./ImageCard";
import {getFavoritesThunk, removeFavoritesThunk} from "../redux/favorites/thunk";
import PaginationComponent from "./PaginationComponent";

const IMAGES_PER_PAGE = 6;

const Bookmarks: FC = () => {

    const favoritesData = useSelector(favoritesDataSelector);

    const [page, setPage] = useState<number>(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoritesThunk());
    },[dispatch]);

    const displayImages = useMemo(() => {
        return favoritesData.slice((page - 1) * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE)
    }, [favoritesData, page]);

    const handleChangePage = useCallback((event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }, []);

    const handleBookmark = useCallback((index) => () => {
        dispatch(removeFavoritesThunk(favoritesData[index].id));
    },[dispatch, favoritesData]);

	return (
	    <>
            <Grid container justify="center" alignItems="center">
                {displayImages.map((imageData, index) => (
                    <ImageCard
                        isBookmark={true}
                        imageUrl={imageData.image}
                        key={imageData.id}
                        id={imageData.id}
                        index={index}
                        link={imageData.link}
                        handleBookmark={handleBookmark}/>
                ))}
            </Grid>
            <PaginationComponent totalPages={favoritesData.length} ImagesPerPage={IMAGES_PER_PAGE} page={page}
                                 handleChangePage={handleChangePage}/>
        </>
	);
};
export default Bookmarks;
