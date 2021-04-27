import {IImages} from "../../common/types";
import {IAction} from "../types";
import {FETCH_IMAGES} from "./action-types";

export interface IImagesState {
  totalPages: number;
  images: {id: string, image: string}[];
  links: string[];
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

export const images = (state: IImagesState = initialState, action: IAction<any>) => {
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

    // case ADD_SCORE.START:
    //   return {
    //     ...state,
    //     isUpdating: true
    //   };
    //
    // case ADD_SCORE.FINISHED:
    //   return {
    //     ...state,
    //     list: [...state.list, action.payload],
    //     isUpdating: false
    //   };

    default:
      return state;
  }
};
