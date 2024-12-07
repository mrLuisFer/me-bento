import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import { SocialMediaLinks } from "@/constants/socialMedia";
import Link from "../../Link";
import Img from "../../Img";
import portfolioGif from "@/assets/media/portfolio.gif";

export default function Portfolio() {
  return (
    <Card className="h-[282px] w-[400px] bg-gradient-to-br from-neutral-900 to-black">
      <CardLogo className="flex w-fit select-none flex-col rounded-xl bg-neutral-200 px-2 py-3 text-xl font-extrabold leading-none text-blue-600">
        mr
      </CardLogo>
      <Img
        src={portfolioGif}
        alt="Preview de mi portafolio"
        className="w-[400px] rounded-xl object-cover"
      />
      <Link
        href={SocialMediaLinks.Portfolio}
        withButton
        buttonProps={{
          variant: "secondary",
        }}
      >
        Descubre mis proyectos más destacados
      </Link>
    </Card>
  );
}
