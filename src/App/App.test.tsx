import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("App renders", () => {
  render(<App />);
  expect(screen.getByText("Sorting Algorithms Visualizer")).toBeDefined();
});

test("Sorting container renders", () => {
  render(<App />);
  expect(screen.getByTestId("sorting-container")).toBeDefined();
});

test("renders more that one column to sort", () => {
  render(<App />);
  expect(screen.getAllByTestId("sorting-column").length).toBeGreaterThanOrEqual(
    2
  );
});

test("renders insertion sort button", () => {
  render(<App />);
  expect(screen.getByText("Insertion Sort")).toBeDefined();
});

test("renders quick sort button", () => {
  render(<App />);
  expect(screen.getByText("Quicksort")).toBeDefined();
});

test("renders bubblesort button", () => {
  render(<App />);
  expect(screen.getByText("Bubblesort")).toBeDefined();
});
