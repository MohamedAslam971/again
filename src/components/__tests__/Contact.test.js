import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test testcases", () => {
  test("Should load the contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
  });
  //test can be written as "it" also it is just the aliasing of test
  it("Should load the submit text inside contact component", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    //assertion
    expect(submit).toBeInTheDocument();
  });
  test("Should load the input name loads inside contact component", () => {
    render(<Contact />);

    const inputType = screen.getByPlaceholderText("Phone");

    //assertion
    expect(inputType).toBeInTheDocument();
  });
  test("Should load two  inputs loads inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //assertion
    expect(inputBoxes.length).toBe(2);
  });
});
