import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({});
AppRegistry.registerComponent("artiefact-mobile", () => StorybookUI);
export default StorybookUI;
