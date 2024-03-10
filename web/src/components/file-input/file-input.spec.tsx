// components/FileInput.test.js

/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import FileInput from "./file-input";

test("fFileInput", () => {
  const mockOnChange = jest.fn();
  render(<FileInput onChange={mockOnChange} />);

  const file = new File(["hello"], "hello.csv", { type: "text/csv" });
  const input = screen.getByAltText("input-file");

  fireEvent.change(input, { target: { files: [file] } });

  expect(mockOnChange).toHaveBeenCalledWith(file);
});
