import {
  NavigationNavigateAction,
  NavigationScreenProp,
} from "react-navigation";

export default class Navigator {
  private static instance: any;
  private navigationRef: NavigationScreenProp<{}, {}>;

  constructor(navigatorRef: any) {
    this.navigationRef = navigatorRef;
  }

  public static get(): Navigator {
    if (!Navigator.instance) {
      throw new Error("Navigation Referrence is not passed!");
    }
    return Navigator.instance;
  }

  public static setTopLevelNavigator(
    navigatorRef: NavigationScreenProp<{}, {}>
  ) {
    Navigator.instance = new Navigator(navigatorRef);
  }

  dispatch(navigationAction: NavigationNavigateAction) {
    this.navigationRef.dispatch(navigationAction);
  }
}
