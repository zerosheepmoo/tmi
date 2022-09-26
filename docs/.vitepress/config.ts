import { defineConfig } from "vitepress";
import { allSidebars } from "./configs/all";

export default defineConfig({
    lang: "ko-KR",
    title: "TMI",
    description: "TMr founders Dev's Indoor",
    base: "/tmi/",
    themeConfig: {
        // Type is `DefaultTheme.Config`
        sidebar: {
            "/knowre/": [
                {
                    text: "Knowre",
                    collapsible: true,
                    items: [
                        { text: "Intro", link: "/knowre/" }, // //knowre//index.md
                        { text: "0. git", link: "/knowre/00git" }, // /knowre/00git.md
                        { text: "1. html", link: "/knowre/01html" }, // /knowre/01html.md
                    ],
                },
            ],
            ...allSidebars,
        },
    },
    outDir: "../out",
});
