import {GET_TAGGED_IMAGES, UPDATE_TAGGED_IMAGES} from "./action-types";
import {ITaggedImages} from "../../common/types";

export const getTaggedImages = (taggedImages: ITaggedImages[]) => {
  return {
    type: GET_TAGGED_IMAGES,
    payload: taggedImages
  }
};

export const updateTaggedImages = (taggedImages: ITaggedImages[]) => {
  return {
    type: UPDATE_TAGGED_IMAGES,
    payload: taggedImages
  }
};
