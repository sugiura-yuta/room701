// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://site.room701.workers.dev",
  integrations: [mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Libre Baskerville",
      cssVariable: "--font-libre-baskerville",
      styles: ["italic"],
    },
  ],

  vite: {
    plugins: [tailwind()],
  },

  adapter: cloudflare(),
});