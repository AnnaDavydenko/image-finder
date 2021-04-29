import {IImagesState, images} from "../../redux/images/reducer";
import {fetchSuccess} from "../../redux/images/actions";

describe("Images reducer", () => {

    let state: IImagesState = {
        totalPages: 0,
        images: [
            { id: "", image: "" },
        ],
        links: [],
        isLoading: false,
    };

    it("length of images should be greater then 0", () => {
        const action = fetchSuccess(state.totalPages, state.images, state.links);
        const newState = images(state, action);
        expect(newState.images.length).toBe(1);
    });
});
