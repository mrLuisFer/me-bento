import { SpotifyArtist } from "@/types/Spotify";
import { useQuery } from "@tanstack/react-query";
import spotify from "@/api/services/spotifyServices";
import Img from "@/app/components/Img";
import Link from "@/app/components/Link";
import { Skeleton } from "@/components/ui/skeleton";

type ArtistProps = {
  artist: SpotifyArtist;
};
export default function Artist({ artist }: ArtistProps) {
  const { data, status, error } = useQuery({
    queryKey: ["artists", artist.id],
    queryFn: () => spotify.getArtistById(artist.id),
  });

  if (error) return <></>;
  if (status === "pending") return <Skeleton className="h-5 w-10" />;

  return (
    <Link
      href={data?.external_urls.spotify ?? ""}
      className="flex items-center gap-1"
      buttonProps={{ title: `Escuchar a ${artist.name} en Spotify` }}
      linkClassName="flex items-center gap-1 hover:bg-green-200 rounded-lg p-1 transition filter active:scale-95"
    >
      <Img
        src={data?.images[2].url ?? ""}
        alt={artist.name}
        className="h-7 w-7 rounded-full object-cover"
      />
      <p className="text-xs">{artist.name}</p>
    </Link>
  );
}
