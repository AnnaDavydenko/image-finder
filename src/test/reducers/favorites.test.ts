import {favorites, IFavoritesState} from "../../redux/favorites/reducer";
import {getFavorites, updateFavorites} from "../../redux/favorites/actions";

describe("Favorites reducer", () => {

    let state: IFavoritesState = {
        favorites: [{
            id: "12345888",
            image: "",
            link: "",
            tags: "",
        }],
    };

    it("length of images should be greater then 0", () => {
        const action = getFavorites(state.favorites);
        const newState = favorites(state, action);
        expect(newState.favorites.length).toBe(1);
    });

    it("length of favorites should be equals then 0", () => {
        const action = updateFavorites([]);
        const newState = favorites(state, action);
        expect(newState.favorites.length).toBe(0);
    });
});
