import SpotifyIcon from "@/app/components/Icons/SpotifyIcon";
import Card from "../Card";
import CardLogo from "../Card/CardLogo";
import ProfileInfo from "./ProfileInfo";
import Track from "./Track";
import Link from "@/app/components/Link";
import { SocialMediaLinks } from "@/constants/socialMediaLinks";
import { FaPlay } from "react-icons/fa";

export default function Spotify() {
  return (
    <Card className="w-80 bg-gradient-to-br from-green-200 to-green-50">
      <div className="flex w-full items-center justify-between gap-2">
        <CardLogo className="bg-white">
          <SpotifyIcon />
        </CardLogo>
        <Link
          href={SocialMediaLinks.SpotifyDefaultTrack}
          className="rounded-xl bg-green-500 text-xs text-white hover:bg-green-600"
          withButton
        >
          <FaPlay size={15} />
          Play
        </Link>
      </div>
      <ProfileInfo />
      <Track />
    </Card>
  );
}
