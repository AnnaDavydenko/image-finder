import { combineReducers } from 'redux';
import {images} from "./images/reducer";

export const rootReducer = combineReducers({
  images: images,
});
