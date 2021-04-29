import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
    it("renders Footer component", () => {
        render(<Footer/>);
        const linkElement = screen.getByText(/Anna Davydenko/i);
        expect(linkElement).toBeInTheDocument();
    });
});
