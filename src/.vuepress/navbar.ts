import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "InfoGare",
    icon: "pen",
    prefix: "/posts/InfoGare/",
    children: ["V3.md"],
  },
]);
