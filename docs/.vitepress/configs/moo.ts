import { DefaultTheme } from "vitepress/types/default-theme";

export const sidebars: DefaultTheme.SidebarMulti = {
    "/moo": [
        {
            text: "Memo",
            collapsed: true,
            items: [
                { text: "Overview", link: "/moo/index" },
                { text: "About git", link: "/moo/about-git" },
            ],
        },
    ],
};
