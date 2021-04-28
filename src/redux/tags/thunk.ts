import {Dispatch} from "redux";
import {getTaggedImages, updateTaggedImages} from "./actions";
import {Storage} from "../../services/storage";

const storage = new Storage();

export const addTagToImageThunk = (tag: string, id: string) => (dispatch: Dispatch) => {
    storage.addTagToImage(tag, id);
    dispatch(updateTaggedImages(storage.getTaggedImages()));
};

export const getTaggedImagesThunk = () => (dispatch: Dispatch) => {
    dispatch(getTaggedImages(storage.getTaggedImages()));
};

export const removeTaggedImagesThunk = (tag: string, id: string) => (dispatch: Dispatch) => {
    storage.removeTagFromImage(tag, id);
    dispatch(updateTaggedImages(storage.getTaggedImages()));
};
