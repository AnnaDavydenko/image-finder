import {IAction} from "../types";
import {GET_TAGGED_IMAGES, UPDATE_TAGGED_IMAGES} from "./action-types";
import {ITaggedImages} from "../../common/types";

export interface ITaggedImagesState {
  taggedImages: ITaggedImages[];
}

const initialState: ITaggedImagesState = {
  taggedImages: [],
};

export const taggedImages = (state: ITaggedImagesState = initialState, action: IAction<ITaggedImages[]>) => {
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
