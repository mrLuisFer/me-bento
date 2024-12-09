import { useCallback, useEffect, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import update from "immutability-helper";
import { DraggableBox } from "./DraggableBox";
import { SocialMediaNames } from "@/constants/socialMedia";
import { DragAndDropType } from "@/constants/dragAndDrop";
import { doSnapToGrid } from "@/lib/utils";

interface BoxMap {
  [key: string]: { top: number; left: number; title: string; id: number };
}

const initialSocialMediaBoxesState: BoxMap = {
  a: { id: 1, title: SocialMediaNames.Github, top: 361, left: 532 },
  b: { id: 2, title: SocialMediaNames.Twitter, top: 19, left: 509 },
  c: { id: 3, title: SocialMediaNames.ImgCard, top: 490, left: 942 },
  d: { id: 4, title: SocialMediaNames.Portfolio, top: 359, left: 94 },
  e: { id: 5, title: SocialMediaNames.Spotify, top: 7, left: 948 },
  f: { id: 6, title: SocialMediaNames.VideoCard, top: 656, left: 37 },
  g: { id: 7, title: SocialMediaNames.LinkedIn, top: 606, left: 576 },
  h: { id: 8, title: SocialMediaNames.DevTo, top: 23, left: 186 },
};
export default function Container({ snapToGrid }: { snapToGrid: boolean }) {
  const [socialMediaBoxes, setSocialMediaBoxes] = useState<BoxMap>(
    initialSocialMediaBoxesState,
  );

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setSocialMediaBoxes(
        update(socialMediaBoxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
      localStorage.setItem(
        "socialMediaBoxes",
        JSON.stringify(
          update(socialMediaBoxes, {
            [id]: {
              $merge: { left, top },
            },
          }),
        ),
      );
    },
    [socialMediaBoxes],
  );

  const [, drop] = useDrop<{
    id: string;
    type: string;
    left: number;
    top: number;
  }>(
    () => ({
      accept: DragAndDropType.Box,
      drop(item, monitor: DropTargetMonitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }

        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox],
  );

  useEffect(() => {
    const socialMediaBoxes = localStorage.getItem("socialMediaBoxes");
    if (socialMediaBoxes) {
      setSocialMediaBoxes(JSON.parse(socialMediaBoxes));
    }
  }, []);

  return (
    <div ref={drop} className="relative h-full w-full">
      {Object.keys(socialMediaBoxes).map((key) => (
        <DraggableBox
          key={key}
          {...(socialMediaBoxes[key] as BoxMap[string])}
          id={key}
        />
      ))}
    </div>
  );
}
