import { Link } from "react-router-dom";
import { PLAYLISTS } from "../../data/playlists";
import { TPlaylist } from "../../data/interfaces";

export function PlaylistsPage() {
  const playlists = PLAYLISTS.filter(
    (playlist: TPlaylist) => playlist.genre !== "Non Music"
  );

  return (
    <div>
      <h2>Playlists</h2>

      <ul>
        {playlists.map((playlist: TPlaylist) => (
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