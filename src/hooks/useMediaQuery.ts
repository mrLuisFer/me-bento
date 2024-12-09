import { useState, useEffect } from "react";

/**
 * Hook to track media query matches
 * @example const isMobile = useMediaQuery('(max-width: 600px)');
 * @param query - A valid CSS media query string
 * @returns `true` if the media query matches, `false` otherwise
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    if (media.addEventListener) {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
};
