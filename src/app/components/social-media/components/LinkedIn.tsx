import LinkedInIcon from "../../Icons/LinkedIn";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import Img from "../../Img";
import Link from "../../Link";
import { SocialMediaLinks } from "@/constants/socialMedia";
import linkedintProfile from "@/assets/images/linkedin-profile.png";

export default function LinkedIn() {
  return (
    <Card className="h-fit w-[345px] bg-gradient-to-br from-blue-200 to-blue-400">
      <CardLogo className="bg-white">
        <LinkedInIcon />
      </CardLogo>
      <Img
        src={linkedintProfile}
        alt="Luis Alvarez LinkedIn Profile"
        className="w-full"
      />
      <Link
        href={SocialMediaLinks.LinkedIn}
        withButton
        buttonProps={{ variant: "secondary" }}
      >
        Conecta conmigo en LinkedIn
      </Link>
    </Card>
  );
}
