import type { FC } from "react";
import { memo } from "react";
import { socialMediaComponents } from "../social-media/components";

export interface BoxProps {
  title: string;
  preview?: boolean;
}

export const Box: FC<BoxProps> = memo(function Box({ title, preview }) {
  const key = title as keyof typeof socialMediaComponents;
  return (
    <div role={preview ? "BoxPreview" : "Box"}>
      {socialMediaComponents[key]}
    </div>
  );
});
