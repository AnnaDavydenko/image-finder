import {IFavorite} from "../../common/types";
import {getFavorites, updateFavorites} from "../../redux/favorites/actions";
import {GET_FAVORITES, UPDATE_FAVORITES} from "../../redux/favorites/action-types";

describe("Favorites actions", () => {
    let favorites : IFavorite[];

    beforeEach((done) => {
        favorites = [{
            id: "458569",
            image: "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg",
            link: "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg",
            tags: "458xss",
        }];
        done();
    });

    it("should return a valid updated favorites payload", () => {
        const body = updateFavorites(favorites);
        expect(body.type).toEqual(UPDATE_FAVORITES);
    });

    it("should return a valid get favorites payload", () => {
        const body = getFavorites(favorites);
        expect(body.type).toEqual(GET_FAVORITES);
    });

});
