import { ThunkDispatch } from 'redux-thunk';
import {IImagesState} from "./images/reducer";
import {IFavoritesState} from "./favorites/reducer";
import {ITaggedImagesState} from "./tags/reducer";

export interface IAction<P> {
  type: string;
  payload: P;
}

export type Reducer<S, P> = (state: S, action: IAction<P>) => S;

export interface IHandlers<S, P> {
  [key: string]: Reducer<S, P>;
}

export interface RootState {
  images: IImagesState;
  favorites: IFavoritesState;
  taggedImages: ITaggedImagesState;
}

export type AsyncDispatch<T, P> = (
  dispatch: ThunkDispatch<T, any, IAction<P>>,
  getState: () => RootState
) => Promise<void>;

export type SyncDispatch<T, P> = (
  dispatch: ThunkDispatch<T, any, IAction<P>>,
  getState: () => RootState
) => void;
