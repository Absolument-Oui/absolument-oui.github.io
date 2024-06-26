import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "fr-FR",
  title: "Absolument Oui",
  description: "All we develop is small!",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
