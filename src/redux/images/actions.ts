import {IImages, ILinks} from "../../common/types";
import {IAction} from "../types";
import {FETCH_IMAGES} from "./action-types";

export const startRequest = (): IAction<undefined> => ({
  type: FETCH_IMAGES.START,
  payload: undefined
});

export const fetchSuccess = (images: string[], links: string[]): IAction<{images: string[], links: string[]}> => ({
  type: FETCH_IMAGES.SUCCESS,
  payload: {images, links}
});

export const fetchFailure = (error: Error): IAction<Error> => ({
  type: FETCH_IMAGES.FAILURE,
  payload: error
});




