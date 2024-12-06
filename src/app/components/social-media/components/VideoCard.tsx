import Card from "./Card";

type VideoImgProps = {
  src: string;
  title: string;
  className?: string;
  width?: string | number;
  height?: string | number;
};

export default function VideoCard({
  src,
  title,
  className,
  width,
  height,
}: VideoImgProps) {
  return <></>;

  return (
    <Card className="bg-gradient-to-t from-neutral-200 to-neutral-100">
      <iframe
        width={width}
        height={height}
        src={src}
        className={`select-none rounded-xl ${className}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Card>
  );
}
