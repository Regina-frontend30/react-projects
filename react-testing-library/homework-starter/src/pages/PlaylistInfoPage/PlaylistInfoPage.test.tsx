import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { PlaylistInfoPage } from "./PlaylistInfoPage";
import { PLAYLISTS } from "../../data/playlists";

describe("PlaylistInfoPage", () => {
  test("shows default text when playlist is not found", () => {
    render(
      <MemoryRouter initialEntries={["/playlists/999"]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Плейлист не найден/i)).toBeInTheDocument();
  });

  test("renders playlist info when playlist exists", () => {
    const playlist = PLAYLISTS[0];

    render(
      <MemoryRouter initialEntries={[`/playlists/${playlist.id}`]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(playlist.name)).toBeInTheDocument();
    expect(screen.getByText(playlist.genre)).toBeInTheDocument();

    const countBySong = playlist.songs.reduce<Record<string, number>>(
      (acc, song) => {
        acc[song] = (acc[song] ?? 0) + 1;
        return acc;
      },
      {}
    );

    Object.entries(countBySong).forEach(([song, count]) => {
      expect(screen.getAllByText(song)).toHaveLength(count);
    });

    expect(screen.getAllByRole("listitem")).toHaveLength(playlist.songs.length);
  });
});