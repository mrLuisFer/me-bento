import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

type TinyTooltipProps = {
  children: ReactNode;
  content: string | ReactNode;
};

export default function TinyTooltip({ children, content }: TinyTooltipProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
