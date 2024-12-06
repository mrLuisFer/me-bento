import { Button, ButtonProps } from "@/components/ui/button";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  withButton?: boolean;
  buttonProps?: ButtonProps;
};

export default function Link({
  children,
  href,
  className,
  withButton = false,
  buttonProps,
}: LinkProps) {
  const Container = withButton ? Button : Fragment;

  return (
    <Container
      {...(withButton
        ? {
            asChild: true,
            ...buttonProps,
            className: buttonProps?.className,
          }
        : {})}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        // className={`text-wrap text-sm filter transition-all active:scale-95 ${className}`}
        className={clsx(
          className,
          "text-wrap text-sm filter transition-all active:scale-95",
        )}
      >
        {children}
      </a>
    </Container>
  );
}
