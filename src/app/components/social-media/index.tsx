import { useMediaQuery } from "@/hooks/useMediaQuery.ts";
import DragAndDrop from "../DragAndDrop/index.tsx";
import { socialMediaComponents } from "./components.tsx";
import { SocialMediaNames } from "@/constants/socialMedia.ts";

export default function SocialMedia() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return <DragAndDrop />;
  return (
    <div className="flex flex-col items-center gap-4 pl-2 pt-8 md:items-start lg:h-screen lg:overflow-y-scroll">
      {Object.keys(socialMediaComponents).map((component) => (
        <div key={component}>
          {socialMediaComponents[component as SocialMediaNames]}
        </div>
      ))}
    </div>
  );
}
