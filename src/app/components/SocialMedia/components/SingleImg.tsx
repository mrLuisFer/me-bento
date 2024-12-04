import Card from "./Card";

type SingleImgProps = {
  src: string;
  alt: string;
};

export default function SingleImg({ src, alt }: SingleImgProps) {
  return (
    <Card className="bg-gradient-to-bl from-neutral-100 to-neutral-200">
      <picture>
        <source srcSet={src} type="image/png" />
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-2xl object-cover"
        />
      </picture>
    </Card>
  );
}
