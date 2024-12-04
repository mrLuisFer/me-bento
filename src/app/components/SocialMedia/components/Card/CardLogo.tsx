import { ReactNode } from "react";

type CardLogoProps = {
  children: ReactNode;
  className?: string;
};

export default function CardLogo({ children, className }: CardLogoProps) {
  return (
    <div
      className={`inline-block w-fit rounded-xl p-2 text-3xl filter transition hover:brightness-105 active:scale-95 ${className}`}
    >
      {children}
    </div>
  );
}
