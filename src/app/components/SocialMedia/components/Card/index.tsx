import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`relative flex h-fit w-fit flex-col items-start gap-3 rounded-2xl p-4 filter transition active:scale-95 ${className}`}
    >
      {children}
    </div>
  );
}
