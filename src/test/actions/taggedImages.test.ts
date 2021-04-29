import {ITaggedImages} from "../../common/types";
import {getTaggedImages, updateTaggedImages} from "../../redux/tags/actions";
import {GET_TAGGED_IMAGES, UPDATE_TAGGED_IMAGES} from "../../redux/tags/action-types";

describe("Favorites actions", () => {
    let taggedImages : ITaggedImages[];

    beforeEach((done) => {
        taggedImages = [{
            id: "458569",
            tags: ["458xss", "cat"],
        }];
        done();
    });

    it("should return a valid updated tagged images payload", () => {
        const body = updateTaggedImages(taggedImages);
        expect(body.type).toEqual(UPDATE_TAGGED_IMAGES);
    });

    it("should return a valid get tagged images payload", () => {
        const body = getTaggedImages(taggedImages);
        expect(body.type).toEqual(GET_TAGGED_IMAGES);
    });

});
