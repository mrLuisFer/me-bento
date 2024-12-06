import Env from "@/env";

const SPOTIFY_GRANT_TYPE = "client_credentials";
const API_URL = "https://api.spotify.com/v1";
const API_ACCOUNTS_URL = "https://accounts.spotify.com/api";
const API_TIMEOUT = 3600;
const {
  VITE_SPOTIFY_CLIENT_ID,
  VITE_SPOTIFY_CLIENT_SECRET,
  VITE_SPOTIFY_REDIRECT_URI,
} = Env;

export {
  VITE_SPOTIFY_CLIENT_ID,
  VITE_SPOTIFY_CLIENT_SECRET,
  VITE_SPOTIFY_REDIRECT_URI,
  API_URL,
  API_ACCOUNTS_URL,
  SPOTIFY_GRANT_TYPE,
  API_TIMEOUT,
};
