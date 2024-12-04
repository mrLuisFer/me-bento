import GitHub from "./components/GitHub.tsx";
import SingleImg from "./components/SingleImg.tsx";
import Twitter from "./components/Twitter.tsx";
import masterRoshiImg from "../../../assets/master-roshi.png";

export default function SocialMedia() {
  return (
    <section className="grid gap-4">
      <GitHub />
      <Twitter />
      <SingleImg src={masterRoshiImg} alt="Maestro Roshi" />
    </section>
  );
}
