import {IImagesState} from "../redux/images/reducer";

export interface IImages {
    imagesURLs: string[],
}
export interface ILinks {
    linksToImagesURLs: string[],
}

export interface IState {
    images: IImagesState;
}


