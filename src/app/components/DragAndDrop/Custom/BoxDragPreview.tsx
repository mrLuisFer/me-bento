import type { FC } from "react";
import { memo } from "react";
import { Box } from "../Box";

export interface BoxDragPreviewProps {
  title: string;
}

export const BoxDragPreview: FC<BoxDragPreviewProps> = memo(
  function BoxDragPreview({ title }) {
    return (
      <div
        style={{
          WebkitTransform: "rotate(-6deg)",
        }}
        className="inline-block -rotate-6"
      >
        <Box title={title} preview />
      </div>
    );
  },
);
