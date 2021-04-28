import {IFavorite} from "../../common/types";
import {GET_FAVORITES, UPDATE_FAVORITES} from "./action-types";

export const getFavorites = (favorites: IFavorite[]) => {
  return {
    type: GET_FAVORITES,
    payload: favorites
  }
};

export const updateFavorites = (favoriteImages: IFavorite[]) => {
  return {
    type: UPDATE_FAVORITES,
    payload: favoriteImages
  }
};
