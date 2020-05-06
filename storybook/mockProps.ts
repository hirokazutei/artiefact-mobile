import { NavigationScreenProp } from "react-navigation";
import { action } from "@storybook/addon-actions";

const navigationMockProp: NavigationScreenProp<any, any> = {
  state: {},
  dispatch: () => {
    action("dispatch");
    return true;
  },
  dismiss: () => {
    action("dismiss");
    return true;
  },
  goBack: () => {
    action("go-back");
    return true;
  },
  getParam: action("getParam"),
  addListener: () => {
    action("add-listener");
    return { remove: () => {} };
  },
  navigate: () => true,
  openDrawer: action("open-drawer"),
  closeDrawer: action("close-drawer"),
  pop: () => {
    action("pop");
    return true;
  },
  push: () => {
    action("push");
    return true;
  },
  replace: () => {
    action("replace");
    return true;
  },
  reset: () => {
    action("reset");
    return true;
  },
  popToTop: () => {
    action("pop-to-top");
    return true;
  },
  isFocused: () => {
    action("focused");
    return true;
  },
  isFirstRouteInParent: () => {
    action("first-route-in-parents");
    return true;
  },
  toggleDrawer: action("toggle-drawer"),
  setParams: () => {
    action("set-params");
    return true;
  },
  dangerouslyGetParent: () => {
    action("dangerously-get-parent");
    return undefined;
  },
};

export { navigationMockProp };
