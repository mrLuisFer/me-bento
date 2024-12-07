import SpotifyIcon from "@/app/components/Icons/SpotifyIcon";
import Card from "../Card";
import CardLogo from "../Card/CardLogo";
import ProfileInfo from "./components/ProfileInfo";
import Track from "./components/Track";
import Link from "@/app/components/Link";
import { SocialMediaLinks } from "@/constants/socialMedia";
import { FaPlay } from "react-icons/fa";

export default function Spotify() {
  return (
    <Card className="h-[501px] w-80 bg-gradient-to-br from-green-200 to-green-50">
      <div className="flex w-full items-center justify-between gap-2">
        <CardLogo className="bg-white">
          <SpotifyIcon />
        </CardLogo>
        <Link
          href={SocialMediaLinks.SpotifyDefaultTrack}
          className="rounded-xl bg-green-500 text-xs text-white hover:bg-green-600"
          withButton
          linkClassName="flex items-center gap-2"
        >
          <FaPlay size={10} />
          Play
        </Link>
      </div>
      <ProfileInfo />
      <Track />
    </Card>
  );
}
