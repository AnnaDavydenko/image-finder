import {IFavorite} from "../../common/types";
import {IAction} from "../types";
import {GET_FAVORITES, UPDATE_FAVORITES} from "./action-types";

export interface IFavoritesState {
  favorites: IFavorite[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

export const favorites = (state: IFavoritesState = initialState, action: IAction<IFavorite[]>) => {
  switch (action.type) {

    case GET_FAVORITES:
      return {
        favorites: action.payload,
      };

    case UPDATE_FAVORITES:
      return {
        favorites: action.payload,
      };

    default:
      return state;
  }
};
