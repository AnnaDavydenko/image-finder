import {fetchSuccess} from "../../redux/images/actions";
import {FETCH_IMAGES} from "../../redux/images/action-types";
import {IImagesData} from "../../common/types";

describe("Images actions", () => {
    let imageData : IImagesData;

    beforeEach((done) => {
        imageData = {
            totalPages: 123456,
            images: [{id: "12", image: "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"}],
            links: ["https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"],
        };
        done();
    });

    it("should return a valid images payload", () => {
        const body = fetchSuccess(imageData.totalPages, imageData.images, imageData.links);
        expect(body.type).toEqual(FETCH_IMAGES.SUCCESS);
    });

});
