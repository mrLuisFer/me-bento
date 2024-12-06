import clsx from "clsx";
import { ReactNode, useRef, useState } from "react";

type CardLogoProps = {
  children: ReactNode;
  className?: string;
};

export default function CardLogo({ children, className }: CardLogoProps) {
  const timeRef = useRef<number | null>(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    timeRef.current = window.setTimeout(() => {
      setHovered(true);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (timeRef.current !== null) clearTimeout(timeRef.current);
    setHovered(false);
  };

  return (
    <div
      className={clsx(
        className,
        "inline-block w-fit rounded-xl p-2 text-3xl filter transition-all hover:brightness-105 active:scale-95",
        hovered && "rotate-180 transform",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
