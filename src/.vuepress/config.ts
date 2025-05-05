import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "fr-FR",
  title: "Absolument Oui",
  description: "All we develop is small!",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    googleAnalyticsPlugin({
      id: "G-TYHZP4FJT4",
    }),
  ],
});
