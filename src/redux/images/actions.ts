import {IImagesData} from "../../common/types";
import {IAction} from "../types";
import {FETCH_IMAGES} from "./action-types";

export const startRequest = (): IAction<undefined> => ({
  type: FETCH_IMAGES.START,
  payload: undefined
});

export const fetchSuccess = (totalPages: number, images: {id: string, image: string}[], links: string[]): IAction<IImagesData> => ({
  type: FETCH_IMAGES.SUCCESS,
  payload: {totalPages, images, links}
});

export const fetchFailure = (error: Error): IAction<Error> => ({
  type: FETCH_IMAGES.FAILURE,
  payload: error
});




