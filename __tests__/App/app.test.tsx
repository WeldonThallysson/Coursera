import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/App";
import { MemoryRouter } from "react-router";
import BookingForm from "../../src/components/BookingForm";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Home from "../../src/pages/home";

describe("Render App", () => {
  test("should render the App", () => {
    render(<App />);
  });
});

describe("Render Booking Form", () => {
  test("should render the Booking Form", () => {
    render(<BookingForm />);
  });
});

describe("Render Header", () => {
  test("should render the Header", () => {
    render(<Header />);
  });
});

describe("Render Footer", () => {
  test("should render the Footer", () => {
    render(<Footer />);
  });
});


describe("Render Home", () => {
  test("should render the home", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});