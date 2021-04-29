import {ITaggedImagesState, taggedImages} from "../../redux/tags/reducer";
import {getTaggedImages, updateTaggedImages} from "../../redux/tags/actions";

describe("Tagged Images reducer", () => {

    let state: ITaggedImagesState = {
        taggedImages: [{
            id: "987654",
            tags: ["123", "456"],
        }],
    };

    it("length of tagged images should be greater then 0", () => {
        const action = getTaggedImages(state.taggedImages);
        const newState = taggedImages(state, action);
        expect(newState.taggedImages.length).toBe(1);
    });

    it("length of tagged images should be equals then 0", () => {
        const action = updateTaggedImages([]);
        const newState = taggedImages(state, action);
        expect(newState.taggedImages.length).toBe(0);
    });
});
