import axios from "axios";
import {
  getAccessToken,
  renewAccessToken,
} from "../services/spotifyAuthService";
import { API_TIMEOUT, API_URL } from "@/constants/spotify";

const spotifyApiClient = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
});

spotifyApiClient.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // if there is no token, fetch a new one
      const newToken = await renewAccessToken();
      config.headers.Authorization = `Bearer ${newToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

spotifyApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const newToken = await renewAccessToken();
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axios(error.config);
      } catch (err) {
        console.error("Token renewal failed:", err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default spotifyApiClient;
