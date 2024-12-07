import DevToIcon from "../../Icons/DevToIcon";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import Img from "../../Img";
import Link from "../../Link";
import { SocialMediaLinks } from "@/constants/socialMedia";
import devToProfile from "@/assets/images/devto-profile.png";

export default function DevTo() {
  return (
    <Card className="h-[335px] w-[305px] bg-gradient-to-br from-[#302d46] to-[#191825]">
      <CardLogo className="bg-black">
        <DevToIcon />
      </CardLogo>
      <Img src={devToProfile} alt="Luis Alvarez Dev.to Profile" width={280} />
      <Link
        withButton
        href={SocialMediaLinks.DevTo}
        className="filter transition hover:brightness-105"
      >
        Explora mis publicaciones en Dev.to
      </Link>
    </Card>
  );
}
