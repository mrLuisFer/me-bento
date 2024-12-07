import {
  API_ACCOUNTS_URL,
  VITE_SPOTIFY_CLIENT_ID,
  VITE_SPOTIFY_CLIENT_SECRET,
  SPOTIFY_GRANT_TYPE,
} from "@/constants/spotify";
import axios from "axios";

type TAccessToken = string | undefined;
let accessToken: TAccessToken = undefined;

export async function fetchAccessToken(): Promise<string> {
  try {
    const response = await axios.post(
      `${API_ACCOUNTS_URL}/token`,
      new URLSearchParams({
        client_id: VITE_SPOTIFY_CLIENT_ID,
        client_secret: VITE_SPOTIFY_CLIENT_SECRET,
        grant_type: SPOTIFY_GRANT_TYPE,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    if (response.status !== 200) {
       new Error("Failed to get access token");
    }
    accessToken = response.data.access_token as string;
    return accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}

export function getAccessToken(): TAccessToken {
  return accessToken;
}

export async function renewAccessToken(): Promise<string> {
  try {
    return await fetchAccessToken();
  } catch (error) {
    console.error("Error renewing access token:", error);
    throw error;
  }
}
