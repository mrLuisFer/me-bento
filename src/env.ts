import { z } from "zod";

const envSchema = z.object({
  VITE_SPOTIFY_CLIENT_ID: z.coerce.string(),
  VITE_SPOTIFY_CLIENT_SECRET: z.coerce.string(),
  VITE_SPOTIFY_REDIRECT_URI: z
    .string()
    .url()
    .optional()
    .default("http://localhost:3000"),
});

const Env = envSchema.parse(import.meta.env);
export default Env;
