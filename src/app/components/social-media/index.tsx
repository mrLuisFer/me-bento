import { useMediaQuery } from "@/hooks/useMediaQuery.ts";
import DragAndDrop from "../DragAndDrop/index.tsx";
import { socialMediaComponents } from "./components.tsx";
import { SocialMediaNames } from "@/constants/socialMedia.ts";

export default function SocialMedia() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return <DragAndDrop />;
  return (
    <div className="flex h-screen flex-col items-start gap-4 overflow-y-scroll pl-2">
      {Object.keys(socialMediaComponents).map((component) => (
        <div key={component}>
          {socialMediaComponents[component as SocialMediaNames]}
        </div>
      ))}
    </div>
  );
}
