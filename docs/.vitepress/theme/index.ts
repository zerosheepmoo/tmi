import DefaultTheme from "vitepress/theme";
import Comment from "../components/Comment.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // register global components
        app.component("Comment", Comment);
    },
};
