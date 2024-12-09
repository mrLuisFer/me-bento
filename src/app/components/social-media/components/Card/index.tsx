import { ReactNode } from "react";
import { clsx } from "clsx";
import DragIcon from "@/app/components/DragAndDrop/DragIcon";

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
        "group relative flex h-fit flex-col items-start gap-2 rounded-xl border border-neutral-100 p-2 shadow-md outline-none drop-shadow-sm filter transition-all duration-200 hover:border-neutral-200 active:border-white",
      )}
    >
      {children}
      <DragIcon />
    </div>
  );
}
