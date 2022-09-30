import { DefaultTheme } from "vitepress/types/default-theme";

export const sidebars: DefaultTheme.SidebarMulti = {
    "/joo": [
        {
            text: "Memo",
            collapsed: true,
            items: [{ text: "Overview", link: "/joo/index" }],
        },
    ],
};
