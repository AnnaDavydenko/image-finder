import { createSelector } from 'reselect';
import {IState} from "../../common/types";

export const getTaggedImagesData = (state: IState) => {
    return state.taggedImages;
};

export const taggedImagesSelector = createSelector(
    getTaggedImagesData,
  ({ taggedImages }) => {
      return taggedImages;
  },
);

