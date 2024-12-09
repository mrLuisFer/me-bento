import { SpotifyImage } from "@/types/spotify";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function findSpotifyImg(
  images: SpotifyImage[],
  smallest = false,
): SpotifyImage | undefined {
  if (images.length === 0) return undefined;

  if (smallest) {
    return images.reduce((small, current) => {
      if (!current.width || !current.height) return small;
      if (!small.width || !small.height) return current;

      const smallestArea = small.width * small.height;
      const currentArea = current.width * current.height;

      return currentArea < smallestArea ? current : small;
    });
  }

  return images.find((image) => image.url !== "");
}

export function doSnapToGrid(x: number, y: number): [number, number] {
  const snappedX = Math.round(x / 32) * 32;
  const snappedY = Math.round(y / 32) * 32;
  return [snappedX, snappedY];
}
