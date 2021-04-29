import {Dispatch} from "redux";
import {fetchFailure, fetchSuccess, startRequest} from "./actions";
import {IData, IImagesData, IPhoto} from "../../common/types";

const API = 'https://api.flickr.com';
const API_KEY = '9f1b6876b5c0f35a7f9d7c9cb5301b30';
const flickerBaseUrl = 'https://www.flickr.com/photos';
const searchMethod = 'flickr.photos.search';
const extras = 'url_q,url_k,url_b,url_z,url_h,url_c';
const format = 'json&nojsoncallback=1';

export const searchImagesThunk = (searchValue: string = 'all', page: number = 1, imagesPerPage: number = 12) => (dispatch: Dispatch) => {
  // fetch start
  dispatch(startRequest());
  fetch(`${API}/services/rest/?method=${searchMethod}&api_key=${API_KEY}&tags=${searchValue}&page=${page}&per_page=${imagesPerPage}&extras=${extras}&format=${format}`, {
    method: "GET",
    // headers: {
    //   'Content-Type': 'application/json'
    // },
  })
      .then(res => res.json())
      .then(res => {
        // fetch success
          const {images, links, totalPages} = jsonParse(res);
          dispatch(fetchSuccess(totalPages, images, links));
      })
      .catch(err => {
        // fetch error
        dispatch(fetchFailure(err));
      });
};

const jsonParse = (data: IData): IImagesData => {
    const result: IImagesData = {totalPages: 0, images: [], links: []};

    if (data.stat === "ok") {
        data.photos.photo.forEach((item: IPhoto) => {
            result.images.push({id: item.id, image: item.url_q});
            result.links.push(`${flickerBaseUrl}/${item.owner}/${item.id}`);
        });
        result.totalPages = data.photos.pages;
    }
    return result;
};
