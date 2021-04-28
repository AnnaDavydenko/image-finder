import {IImagesState} from "../redux/images/reducer";
import {IFavoritesState} from "../redux/favorites/reducer";

export interface IImages {
    imagesURLs: string[],
}

export interface IFavorite {
    id: string,
    image: string;
    link: string;
    tags?: string;
}


export interface ILinks {
    linksToImagesURLs: string[],
}

export interface IState {
    images: IImagesState;
    favorites: IFavoritesState;
    taggedImages: any;
}

export interface IImagesData {
    totalPages: number;
    images: {id: string; image: string; isBookmark?: boolean;}[];
    links: string[];
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
