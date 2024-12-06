import clsx from "clsx";

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: string | number;
  height?: string | number;
};

export default function Img({
  src,
  alt,
  className,
  containerClassName,
  width = "100%",
  height = "100%",
}: ImgProps) {
  return (
    <picture className={`relative ${containerClassName}`}>
      <source srcSet={src} type="image/png" />
      <img
        src={src}
        alt={alt}
        className={clsx("rounded-2xl object-cover", className)}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        title={alt}
      />
    </picture>
  );
}
