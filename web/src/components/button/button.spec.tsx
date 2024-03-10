/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Button from "./button";

test("render button", () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
