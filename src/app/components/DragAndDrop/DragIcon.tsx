import TinyTooltip from "@/components/ui/tiny-tooltip";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function DragIcon() {
  return (
    <div className="absolute bottom-0 right-0 hidden rotate-45 transform cursor-grab p-2 text-white opacity-0 filter transition active:cursor-grabbing group-hover:opacity-100 lg:block">
      <div className="relative">
        <TinyTooltip content="Puedes mover las cards si deseas">
          <RxDragHandleDots2 />
        </TinyTooltip>
      </div>
    </div>
  );
}
