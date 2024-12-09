import { SpotifyArtist } from "@/types/spotify";
import Artist from "./Artist";

type ArtistsProps = {
  artists: SpotifyArtist[];
};

export default function Artists({ artists }: ArtistsProps) {
  if (artists.length === 0) return null;

  return (
    <div className="flex items-center justify-center gap-3 animate-in">
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
