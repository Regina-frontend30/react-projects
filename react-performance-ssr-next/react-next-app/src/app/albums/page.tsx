import { getAlbums } from "@/api/AlbumsApi";

export default async function AlbumsPage() {
  const albums = await getAlbums();

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
}
