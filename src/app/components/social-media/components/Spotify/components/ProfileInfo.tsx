import { useQuery } from "@tanstack/react-query";
import spotify from "@/api/services/spotifyServices";
import { Skeleton } from "@/components/ui/skeleton";

const username = "lolesuncrak";
export default function ProfileInfo() {
  const { status, data, error } = useQuery({
    queryKey: ["users", username],
    queryFn: () => spotify.getProfileByUsername(username),
  });

  if (error) return null;
  if (status === "pending") return <Skeleton className="h-6 w-16" />;

  return (
    <>
      <p className="text-xs">{data?.display_name} está escuchando:</p>
    </>
  );
}
