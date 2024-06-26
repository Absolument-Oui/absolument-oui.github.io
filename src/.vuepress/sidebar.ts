import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "InfoGare",
      icon: "https://github.com/Absolument-Oui/InfoGare/blob/website/src/favicon.png?raw=true",
      prefix: "posts/InfoGare/",
      children: "structure",
    },
  ],
});
