import { useParams } from "react-router-dom";
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

      <p>Жанр: {playlist.genre}</p>

      <h3>Треки:</h3>

      <ul>
        {playlist.songs.map((song, i) => (
          <li key={i}>{song}</li>
        ))}
      </ul>
    </div>
  );
}