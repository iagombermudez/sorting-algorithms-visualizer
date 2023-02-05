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
  expect(screen.getByText("insertion sort")).toBeDefined();
});

test("renders quick sort button", () => {
  render(<App />);
  expect(screen.getByText("quicksort")).toBeDefined();
});

test("renders bubblesort button", () => {
  render(<App />);
  expect(screen.getByText("bubblesort")).toBeDefined();
});

test("renders mergesort button", () => {
  render(<App />);
  expect(screen.getByText("mergesort")).toBeDefined();
});

test("renders heapsort button", () => {
  render(<App />);
  expect(screen.getByText("heapsort")).toBeDefined();
});

test("renders selection sort button", () => {
  render(<App />);
  expect(screen.getByText("selection sort")).toBeDefined();
});

test("renders reset button", () => {
  render(<App />);
  expect(screen.getByText("Reset")).toBeDefined();
});

test("renders start button", () => {
  render(<App />);
  expect(screen.getByText("Start")).toBeDefined();
});
