import { combineReducers } from 'redux';
import {images} from "./images/reducer";
import {favorites} from "./favorites/reducer";
import {taggedImages} from "./tags/reducer";

export const rootReducer = combineReducers({
  images: images,
  favorites: favorites,
  taggedImages: taggedImages,
});
