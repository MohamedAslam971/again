import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchbtn);

  await waitFor(() => {
    const card = screen.getAllByTestId("resCard");
    console.log("Cards Found in Jest Test:", card.length);

    card.forEach((card, index) => console.log(`Card ${index + 1}:`, card.textContent));

    expect(card.length).toBe(4);
  });
});






