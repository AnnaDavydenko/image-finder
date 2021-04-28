import {IFavorite} from "../../common/types";
import {IAction} from "../types";
import {GET_TAGGED_IMAGES, UPDATE_TAGGED_IMAGES} from "./action-types";

export interface ITaggedImagesState {
  taggedImages: any[];
}

const initialState: ITaggedImagesState = {
  taggedImages: [],
};

export const taggedImages = (state: ITaggedImagesState = initialState, action: IAction<any>) => {
  switch (action.type) {

    case GET_TAGGED_IMAGES:
      return {
        taggedImages: action.payload,
      };

    case UPDATE_TAGGED_IMAGES:
      return {
        taggedImages: action.payload,
      };

    default:
      return state;
  }
};
