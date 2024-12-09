import {
  SpotifyArtistResponse,
  SpotifyTrack,
  SpotifyUser,
} from "@/types/spotify";
import spotifyApiClient from "../clients/spotifyApiClient";

export class Spotify {
  async getProfileByUsername(
    username: string = "lolesuncrak",
  ): Promise<SpotifyUser> {
    try {
      const response = await spotifyApiClient.get(`/users/${username}`);
      return response.data as SpotifyUser;
    } catch (error) {
      console.error("Error fetching Spotify profile:", error);
      throw error;
    }
  }

  async getArtistById(artistId: string): Promise<SpotifyArtistResponse> {
    try {
      const response = await spotifyApiClient.get(`/artists/${artistId}`);
      return response.data as SpotifyArtistResponse;
    } catch (error) {
      console.error("Error fetching Spotify artist:", error);
      throw error;
    }
  }

  async getTrackById(trackId: string): Promise<SpotifyTrack> {
    try {
      const response = await spotifyApiClient.get(`/tracks/${trackId}`);
      return response.data as SpotifyTrack;
    } catch (error) {
      console.error("Error fetching Spotify track:", error);
      throw error;
    }
  }
}

export default new Spotify();
