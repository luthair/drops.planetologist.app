/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['images.unsplash.com', 'static-cdn.jtvnw.net'],
  },
  // Enable standalone output for Docker
  output: 'standalone',
};

export default config;
