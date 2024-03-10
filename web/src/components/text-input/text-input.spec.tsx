import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextInput from "./text-input";

describe("TextInput", () => {
  it("calls onChange", async () => {
    const mockOnChange = jest.fn();
    render(<TextInput onChange={mockOnChange} />);

    const select = screen.getByTestId("text-input");

    fireEvent.change(select, { target: { value: "text" } });

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "text" }),
      })
    );
  });
});
