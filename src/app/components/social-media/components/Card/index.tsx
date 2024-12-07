import { ReactNode } from "react";
import { clsx } from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  const reverseRotate = Math.random() > 0.5;

  return (
    <div
      className={clsx(
        className,
        reverseRotate ? "hover:rotate-[-2deg]" : "hover:rotate-[2deg]",
        "relative flex h-fit flex-col items-start gap-2 rounded-xl p-2 shadow-md outline-2 outline-neutral-100 drop-shadow-sm filter transition-all duration-200 hover:outline-neutral-200",
      )}
    >
      {children}
    </div>
  );
}
