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
const flickerBaseUrl = 'https://www.flickr.com/photos';
const API = 'https://api.flickr.com';
const API_KEY = '9f1b6876b5c0f35a7f9d7c9cb5301b30';
const searchMethod = 'flickr.photos.search';
const getMethod = 'flickr.photos.getRecent';
const imagesPerPage = '12';

export const searchImagesThunk = (searchValue: string = 'all') => (dispatch: Dispatch) => {
  // fetch start
  dispatch(startRequest());
  fetch(`${API}/services/rest/?method=${searchMethod}&api_key=${API_KEY}&tags=${searchValue}&per_page=${imagesPerPage}&extras=url_q,url_k,url_b,url_z,url_h,url_c&format=json`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
      .then(res => res.json())
      .then(res => {
        // fetch success
          const {images, links} = jsonParse(res);
          dispatch(fetchSuccess(images, links));
      })
      .catch(err => {
        // fetch error
        dispatch(fetchFailure(err));
      });
};

export const getImagesThunk = (searchValue: string) => (dispatch: Dispatch) => {
    // fetch start
    dispatch(startRequest());
    fetch(`${API}/services/rest/?method=${getMethod}&api_key=${API_KEY}&tags=${searchValue}&per_page=${imagesPerPage}&extras=url_q,url_k,url_b,url_z,url_h,url_c&format=json`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            // fetch success
            const {images, links} = jsonParse(res);
            dispatch(fetchSuccess(images, links));
        })
        .catch(err => {
            // fetch error
            dispatch(fetchFailure(err));
        });
};

const jsonParse = (data: any): {images: string[], links: string[]} => {
    const images = [] as string[];
    const links = [] as string[];

    if (data.stat === "ok") {
        data.photos.photo.forEach((item: any) => {
            images.push(item.url_q);
            links.push(`${flickerBaseUrl}/${item.owner}/${item.id}`);
        });
    }

    return {images, links};
};
