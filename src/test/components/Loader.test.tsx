import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader", () => {
    it("renders Loader component", () => {
        const { container } = render(<Loader/>);
        expect(container.getElementsByClassName('MuiCircularProgress-svg').length).toBe(1);
    });
});
