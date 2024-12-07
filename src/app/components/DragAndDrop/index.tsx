import Container from "./Container";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { CustomDragLayer } from "./Custom/CustomDragLayer";

export default function DragAndDrop() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen w-screen overflow-y-scroll transition hover:bg-neutral-50">
        <Container snapToGrid={false} />
        <CustomDragLayer snapToGrid={false} />
      </div>
    </DndProvider>
  );
}
