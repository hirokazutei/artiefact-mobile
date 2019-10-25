/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
//import root from "./src/root";
import { name as appName } from "./app.json";
import StorybookUIRoot from "./storybook/storybook";

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
