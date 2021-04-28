import {Dispatch} from "redux";
import {getFavorites, updateFavorites} from "./actions";
import {IFavorite} from "../../common/types";
import {Storage} from "../../services/storage";

const storage = new Storage();

export const addFavoritesThunk = (favoriteImage: IFavorite) => (dispatch: Dispatch) => {
    storage.addFavorites(favoriteImage);
    dispatch(updateFavorites(storage.getFavorites()));
};

export const getFavoritesThunk = () => (dispatch: Dispatch) => {
    dispatch(getFavorites(storage.getFavorites()));
};

export const removeFavoritesThunk = (id: string) => (dispatch: Dispatch) => {
    storage.removeFavorite(id);
    dispatch(updateFavorites(storage.getFavorites()));
};
