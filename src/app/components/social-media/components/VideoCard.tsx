import Card from "./Card";

type VideoImgProps = {
  src: string;
  title: string;
  className?: string;
};

export default function VideoCard({ src, title, className }: VideoImgProps) {
  return (
    <Card className="w-fit bg-gradient-to-t from-neutral-200 to-neutral-100">
      <iframe
        src={src}
        className={`h-[250px] w-[350px] select-none rounded-xl border-none md:w-[440px] lg:h-[280px] ${className}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Card>
  );
}
