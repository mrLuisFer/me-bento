import { ReactNode } from "react";

type CardTitleProps = {
  children: ReactNode;
};
export default function CardTitle({ children }: CardTitleProps) {
  return (
    <p className="flex h-fit w-fit gap-2 text-base font-bold">{children}</p>
  );
}
