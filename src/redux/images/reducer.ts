import {IImagesData} from "../../common/types";
import {IAction} from "../types";
import {FETCH_IMAGES} from "./action-types";

export interface IImagesState extends IImagesData {
  error?: Error;
  isLoading: boolean;
}

const initialState: IImagesState = {
  totalPages: 0,
  images: [],
  links: [],
  error: undefined,
  isLoading: false,
};

export const images = (state: IImagesState = initialState, action: IAction<IImagesData>) => {
  switch (action.type) {

    case FETCH_IMAGES.START:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_IMAGES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        totalPages: action.payload.totalPages,
        images: action.payload.images,
        links: action.payload.links,
      };

    case FETCH_IMAGES.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
