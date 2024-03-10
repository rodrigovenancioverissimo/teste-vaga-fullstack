import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectInput from "./select-input";

describe("SelectInput", () => {
  it("calls onChange handler with the selected value", async () => {
    const mockOnChange = jest.fn();
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(<SelectInput options={options} onChange={mockOnChange} />);

    const select = screen.getByTestId("select");

    fireEvent.change(select, { target: { value: "option2" } });

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "option2" }),
      })
    );
  });
});
