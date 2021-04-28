import {IFavorite} from "../../common/types";
import {GET_TAGGED_IMAGES, UPDATE_TAGGED_IMAGES} from "./action-types";

export const getTaggedImages = (taggedImages: any) => {
  return {
    type: GET_TAGGED_IMAGES,
    payload: taggedImages
  }
};

export const updateTaggedImages = (taggedImages: any) => {
  return {
    type: UPDATE_TAGGED_IMAGES,
    payload: taggedImages
  }
};
