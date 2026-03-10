import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data/playlists";
import { TPlaylist } from "../../data/interfaces";

export function PlaylistsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get("genre") ?? "";
  const name = searchParams.get("name") ?? "";

  const filteredPlaylists = PLAYLISTS
    .filter((playlist: TPlaylist) => playlist.genre !== "Non Music")
    .filter((playlist: TPlaylist) =>
      genre
        ? playlist.genre.toLowerCase().includes(genre.toLowerCase())
        : true
    )
    .filter((playlist: TPlaylist) =>
      name
        ? playlist.name.toLowerCase().includes(name.toLowerCase())
        : true
    );

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("genre", value);
    } else {
      params.delete("genre");
    }

    setSearchParams(params);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
    }

    setSearchParams(params);
  };

  return (
    <div>
      <h2>Playlists</h2>

      <div>
        <label>
          Жанр:
          <input type="text" value={genre} onChange={handleGenreChange} />
        </label>
      </div>

      <div>
        <label>
          Название:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>

      <ul>
        {filteredPlaylists.map((playlist: TPlaylist) => (
          <li key={playlist.id}>
            <Link to={`/playlists/${playlist.id}`}>
              {playlist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}