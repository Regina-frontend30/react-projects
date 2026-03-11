import { useParams, Link } from "react-router-dom";
import { PLAYLISTS } from "../../data/playlists";
import { TPlaylist } from "../../data/interfaces";

export function PlaylistInfoPage() {
  const { playlistId } = useParams<{ playlistId: string }>();

  const playlist: TPlaylist | undefined = PLAYLISTS.find(
    (p) => p.id === Number(playlistId)
  );

  if (!playlist) {
    return <p>Плейлист не найден</p>;
  }

  return (
    <div>
      <h2>{playlist.name}</h2>

      <p>
        Жанр:{" "}
        <Link to={`/playlists?genre=${playlist.genre}`}>
          {playlist.genre}
        </Link>
      </p>

      <h3>Треки:</h3>

      <ul>
        {playlist.songs.map((song, i) => (
          <li key={i}>{song}</li>
        ))}
      </ul>

      <Link to="/playlists">← Назад к списку</Link>
    </div>
  );
}