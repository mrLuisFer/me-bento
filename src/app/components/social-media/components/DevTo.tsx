import DevToIcon from "@/app/components/icons/DevToIcon";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import Img from "../../Img";
import Link from "../../Link";
import { SocialMediaLinks } from "@/constants/socialMedia";
import devToProfile from "@/assets/images/devto-profile.png";

export default function DevTo() {
  return (
    <Card className="h-fit w-fit bg-gradient-to-br from-[#302d46] to-[#191825] lg:w-[305px]">
      <CardLogo className="bg-black">
        <DevToIcon />
      </CardLogo>
      <Img
        src={devToProfile}
        alt="Luis Alvarez Dev.to Profile"
        className="w-[350px] md:w-[430px] lg:w-full"
      />
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
