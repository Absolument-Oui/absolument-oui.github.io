import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "InfoGare",
    icon: "pen",
    prefix: "/posts/InfoGare/",
    children: ["V3.md", "V3.1-1.md"],
  },
]);
