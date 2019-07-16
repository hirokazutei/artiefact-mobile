export type MainStackRouteTypes = "initialize" | "auth" | "mapStack";

const mainStackRoutes: Readonly<
  { [key in MainStackRouteTypes]: MainStackRouteTypes }
> = {
  initialize: "initialize",
  auth: "auth",
  mapStack: "mapStack"
};

export type AuthStackRouteTypes = "intro" | "signIn" | "signUp";

const authStackRoutes: Readonly<
  { [key in AuthStackRouteTypes]: AuthStackRouteTypes }
> = {
  intro: "intro",
  signIn: "signIn",
  signUp: "signUp"
};

export type MapStackRouteTypes = "mapView";

const mapStackRoutes: Readonly<
  { [key in MapStackRouteTypes]: MapStackRouteTypes }
> = {
  mapView: "mapView"
};

export default {
  mainStackRoutes,
  authStackRoutes,
  mapStackRoutes
};
