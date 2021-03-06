import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header", () => {
    it("renders Header component", () => {
        render(<Header />);
        const linkElement = screen.getByText(/image finder/i);
        expect(linkElement).toBeInTheDocument();
    });
});
