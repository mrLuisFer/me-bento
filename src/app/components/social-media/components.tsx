import GitHub from "./components/GitHub";
import ImgCard from "./components/ImgCard";
import Twitter from "./components/Twitter";
import Portfolio from "./components/Portfolio.tsx";
import VideoCard from "./components/VideoCard.tsx";
import LinkedIn from "./components/LinkedIn.tsx";
import DevTo from "./components/DevTo.tsx";
import Spotify from "./components/Spotify/index.tsx";
import masterRoshiImg from "@/assets/images/master-roshi.png";
import { SocialMediaNames } from "@/constants/socialMedia.ts";

export const socialMediaComponents = {
  [SocialMediaNames.Github]: <GitHub />,
  [SocialMediaNames.Twitter]: <Twitter />,
  [SocialMediaNames.ImgCard]: (
    <ImgCard src={masterRoshiImg} alt="Filosofía del Maestro Roshi" />
  ),
  [SocialMediaNames.Portfolio]: <Portfolio />,
  [SocialMediaNames.Spotify]: <Spotify />,
  [SocialMediaNames.VideoCard]: (
    <VideoCard
      src="https://www.youtube.com/embed/rR4n-0KYeKQ?si=zuuDPVVcnqBtyJXa"
      title="Cómo escribimos/revisamos código en grandes empresas de tecnología"
      height={280}
      width={440}
    />
  ),
  [SocialMediaNames.LinkedIn]: <LinkedIn />,
  [SocialMediaNames.DevTo]: <DevTo />,
};
