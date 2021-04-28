import { createSelector } from 'reselect';
import {IState} from "../../common/types";

export const getImagesData = (state: IState) => {
    return state.images;
};

export const imagesDataSelector = createSelector(
    getImagesData,
  ({ images, links, totalPages }) => {
      return { images, links, totalPages };
  },
);

