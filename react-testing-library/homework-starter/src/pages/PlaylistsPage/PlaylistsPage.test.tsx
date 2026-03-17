import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { PlaylistsPage } from "./PlaylistsPage";

const mockSetSearchParams = jest.fn();

jest.mock("react-router-dom", () => {
  const original = jest.requireActual("react-router-dom");

  return {
    ...original,
    useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
  };
});

describe("PlaylistsPage", () => {
  test("updates search params when genre filter changes", () => {
    render(
      <MemoryRouter>
        <PlaylistsPage />
      </MemoryRouter>,
    );

    const genreInput = screen.getByLabelText(/жанр/i);

    fireEvent.change(genreInput, {
      target: { value: "rock" },
    });

    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
    const params = mockSetSearchParams.mock.calls[0]?.[0] as URLSearchParams;
    expect(params.get("genre")).toBe("rock");
  });
});
