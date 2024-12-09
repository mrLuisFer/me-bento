import { ReactNode } from "react";
import { clsx } from "clsx";
import { RxDragHandleDots2 } from "react-icons/rx";

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
        "group relative flex h-fit flex-col items-start gap-2 rounded-xl p-2 shadow-md outline-2 outline-neutral-100 drop-shadow-sm filter transition-all duration-200 hover:outline-neutral-200",
      )}
    >
      <div className="absolute bottom-0 right-0 rotate-45 transform cursor-grab p-2 text-white opacity-0 filter transition active:cursor-grabbing group-hover:opacity-100">
        <RxDragHandleDots2 />
      </div>
      {children}
    </div>
  );
}
