import spotify from "@/api/services/spotifyServices";
import { useQuery } from "@tanstack/react-query";
import Artists from "./Artists";
import { findSpotifyImg } from "@/lib/utils";
import Img from "@/app/components/Img";
import { Skeleton } from "@/components/ui/skeleton";

const trackId = "4lriIG2vNqwDWzOj2I9rtj";
export default function Track() {
  const { status, data, error } = useQuery({
    queryKey: ["tracks", trackId],
    queryFn: () => spotify.getTrackById(trackId),
  });

  if (error) return null;
  if (status === "pending") return <Skeleton className="h-[315px] w-[315px]" />;

  const albumImage = findSpotifyImg(data?.album.images ?? []);

  return (
    <div>
      <p className="text-sm font-semibold">{data?.name}</p>
      <div className="flex flex-col items-center gap-2">
        {albumImage ? (
          <Img
            src={albumImage.url}
            alt={data?.name ?? ""}
            className="relative z-10 h-[315px] w-[315px]"
          />
        ) : (
          <div></div>
        )}
        <Artists artists={data?.artists ?? []} />
      </div>
    </div>
  );
}
