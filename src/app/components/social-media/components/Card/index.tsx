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
        reverseRotate ? "lg:hover:rotate-[-2deg]" : "lg:hover:rotate-[2deg]",
        "group relative flex h-fit flex-col items-start gap-2 rounded-xl border border-neutral-100 px-2 py-3 shadow-md outline-none drop-shadow-sm filter transition-all duration-200 hover:border-neutral-200 hover:shadow-lg active:border-white lg:p-2",
      )}
    >
      {children}
      <DragIcon />
    </div>
  );
}
