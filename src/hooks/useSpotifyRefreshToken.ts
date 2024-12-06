import { useEffect } from "react";
import { fetchAccessToken } from "../api/services/spotifyAuthService";

export function useTokenRefresher(expirationTime: number) {
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        await fetchAccessToken(); // refresh token
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    }, expirationTime - 5000); // 5 seconds before expiration

    return () => clearTimeout(timer);
  }, [expirationTime]);
}
