import React from "react";
import { render } from "@testing-library/react";
import ImageCard from "../../components/ImageCard";
import { Provider } from 'react-redux';
import store from "../../redux/rootStore";

interface IProps {
    imageUrl: string;
    isBookmark: boolean;
    index: number;
    link: string;
    handleBookmark: (index: number) => () => void;
    id: string;
}

describe("ImageCard", () => {
    let imageCard : IProps;

    beforeEach((done) => {
        imageCard = {
            imageUrl: "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg",
            id: "134748487gr",
            isBookmark: true,
            index: 1,
            link: "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg",
            handleBookmark: () => () => {},
        };
        done();
    });

    it("renders Toast component", () => {
        const {container} = render(
            <Provider store={store}>
                <ImageCard
                    isBookmark={imageCard.isBookmark}
                    imageUrl={imageCard.imageUrl}
                    id={imageCard.id}
                    index={imageCard.index}
                    link={imageCard.link}
                    handleBookmark={imageCard.handleBookmark}/>
            </Provider>
        );
        expect(container.getElementsByClassName('MuiCardMedia-root')[0]).toHaveAttribute('title', 'image card');
    });
});
