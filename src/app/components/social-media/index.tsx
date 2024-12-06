import GitHub from "./components/GitHub.tsx";
import ImgCard from "./components/ImgCard.tsx";
import Twitter from "./components/Twitter/index.tsx";
import Portfolio from "./components/Portfolio.tsx";
import VideoCard from "./components/VideoCard.tsx";
import LinkedIn from "./components/LinkedIn.tsx";
import DevTo from "./components/DevTo.tsx";
import Spotify from "./components/Spotify/index.tsx";
import masterRoshiImg from "@/assets/images/master-roshi.png";

export default function SocialMedia() {
  return (
    <section className="flex h-screen flex-wrap gap-x-5 gap-y-3 overflow-y-scroll py-8 pl-2">
      <GitHub />
      <Twitter />
      <ImgCard src={masterRoshiImg} alt="Maestro Roshi" />
      <Portfolio />
      <Spotify />
      <VideoCard
        src="https://www.youtube.com/embed/rR4n-0KYeKQ?si=zuuDPVVcnqBtyJXa"
        title="how we write/review code in big tech companies"
        height={280}
        width={440}
      />
      <LinkedIn />
      <DevTo />
    </section>
  );
}
