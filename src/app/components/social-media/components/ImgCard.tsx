import Img from "../../Img";
import Card from "./Card";

type SingleImgProps = {
  src: string;
  alt: string;
};

export default function ImgCard({ src, alt }: SingleImgProps) {
  return (
    <Card className="bg-gradient-to-bl from-neutral-900 to-neutral-950">
      <Img src={src} alt={alt} containerClassName="w-80" />
    </Card>
  );
}
