import { createSelector } from 'reselect';
import {IState} from "../../common/types";

export const getFavoritesData = (state: IState) => {
    return state.favorites;
};

export const favoritesDataSelector = createSelector(
    getFavoritesData,
  ({ favorites }) => {
      return favorites;
  },
);

