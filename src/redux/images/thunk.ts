import {Dispatch} from "redux";
import {fetchFailure, fetchSuccess, startRequest} from "./actions";

// export const getImagesThunk = (): AsyncDispatch<IState, any> => async (dispatch, getState) => {
//   dispatch(startRequest());
//   const { languageSelector } = getState();
//   try {
//     const data = {
//       countriesNum: countriesPerPage,
//       reloadLang: languageSelector.language,
//     };
//     const options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json; charset=UTF-8' },
//       body: JSON.stringify(data),
//     };
//     const response = await fetch(`${api}/${countriesAPI}`, options);
//     const countries = (await response.json()) as Countries;
//     dispatch(fetchSuccess(countries));
//   } catch (error) {
//     if (error) {
//       dispatch(fetchFailure(error));
//     }
//   }
// };
const API = 'https://api.flickr.com';
const API_KEY = '9f1b6876b5c0f35a7f9d7c9cb5301b30';
const flickerBaseUrl = 'https://www.flickr.com/photos';
const searchMethod = 'flickr.photos.search';
const getMethod = 'flickr.photos.getRecent';
//const imagesPerPage = '12';
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

const jsonParse = (data: any): {totalPages: number, images: {id: string, image: string}[], links: string[]} => {
    const result: {totalPages: number, images: {id: string, image: string}[], links: string[]} = {totalPages: 0, images: [], links: []};

    if (data.stat === "ok") {
        data.photos.photo.forEach((item: any) => {
            result.images.push({id: item.id, image: item.url_q});
            result.links.push(`${flickerBaseUrl}/${item.owner}/${item.id}`);
        });
        result.totalPages = data.photos.pages;
    }
    return result;
};
