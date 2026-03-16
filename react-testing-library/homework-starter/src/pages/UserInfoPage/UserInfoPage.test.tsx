import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./UserInfoPage";
import { USERS } from "../../data/users";

describe("UserInfoPage", () => {
  test("shows default text when user is not found", () => {
    render(
      <MemoryRouter initialEntries={["/users/999"]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Пользователь не найден/i)).toBeInTheDocument();
  });

  test("renders user info when user exists", () => {
    const user = USERS[0];

    render(
      <MemoryRouter initialEntries={[`/users/${user.id}`]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(user.fullName)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();

    if (user.playlist) {
      const playlistLink = screen.getByRole("link", { name: /плейлист/i });
      expect(playlistLink).toHaveAttribute(
        "href",
        `/playlists/${user.playlist.id}`
      );
    }
  });
});
