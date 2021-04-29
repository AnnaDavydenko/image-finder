import {IImagesState} from "../redux/images/reducer";
import {IFavoritesState} from "../redux/favorites/reducer";
import {ITaggedImagesState} from "../redux/tags/reducer";

export interface IFavorite {
    id: string,
    image: string;
    link: string;
    tags?: string;
}

export interface IState {
    images: IImagesState;
    favorites: IFavoritesState;
    taggedImages: ITaggedImagesState;
}

export interface IImagesData {
    totalPages: number;
    images: {id: string; image: string; isBookmark?: boolean;}[];
    links: string[];
}
export interface ITaggedImages {
    id: string;
    tags: string[];
}

export interface IPhoto {
    id: string;
    url_q: string;
    owner: string;
}
export interface IPhotos {
    page: number;
    pages: number;
    perpage: number;
    photo: IPhoto[];
    total: number;
}
export interface IData {
    photos: IPhotos;
    stat: string;
}
