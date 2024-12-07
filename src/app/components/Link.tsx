import { Button, ButtonProps } from "@/components/ui/button";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  withButton?: boolean;
  buttonProps?: ButtonProps;
  linkClassName?: string;
};

export default function Link({
  children,
  href,
  className,
  withButton = false,
  buttonProps,
  linkClassName,
}: LinkProps) {
  const Container = withButton ? Button : Fragment;

  return (
    <Container
      {...(withButton
        ? {
            asChild: true,
            ...buttonProps,
            className: clsx(
              className,
              buttonProps?.className,
              "text-wrap text-sm filter transition-all active:scale-95",
            ),
          }
        : {})}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={linkClassName}
      >
        {children}
      </a>
    </Container>
  );
}
