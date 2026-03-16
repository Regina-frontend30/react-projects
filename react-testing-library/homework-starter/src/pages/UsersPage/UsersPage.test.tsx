import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { UsersPage } from "./UsersPage";

const mockSetSearchParams = jest.fn();

jest.mock("react-router-dom", () => {
  const original = jest.requireActual("react-router-dom");
  return {
    ...original,
    useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
  };
});

describe("UsersPage", () => {
  test("updates search params when user types in search", () => {
    render(
      <MemoryRouter>
        <UsersPage />
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "john" },
    });

    expect(mockSetSearchParams).toHaveBeenCalled();
  });
});
