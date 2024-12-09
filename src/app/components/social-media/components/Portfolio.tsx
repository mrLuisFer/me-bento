import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import { SocialMediaLinks } from "@/constants/socialMedia";
import Link from "../../Link";
import Img from "../../Img";
import portfolioGif from "@/assets/media/portfolio.gif";

export default function Portfolio() {
  return (
    <Card className="h-fit w-fit bg-gradient-to-br from-neutral-900 to-black lg:w-[400px]">
      <CardLogo className="flex w-fit select-none flex-col rounded-xl bg-neutral-200 px-2 py-3 text-xl font-extrabold leading-none text-blue-600">
        mr
      </CardLogo>
      <Img
        src={portfolioGif}
        alt="Preview de mi portafolio"
        className="rounded-xl object-cover"
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
