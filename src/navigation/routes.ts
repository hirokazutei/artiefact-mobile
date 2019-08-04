export type MainStackRouteTypes =
  | "initializationStack"
  | "authStack"
  | "mapStack";

const mainStackRoutes: Readonly<
  { [key in MainStackRouteTypes]: MainStackRouteTypes }
> = {
  initializationStack: "initializationStack",
  authStack: "authStack",
  mapStack: "mapStack"
};

export type InitializationRouteTypes = "initialization";

const initializationStackRoutes: Readonly<
  { [key in InitializationRouteTypes]: InitializationRouteTypes }
> = {
  initialization: "initialization"
};

export type AuthStackRouteTypes = "intro" | "signIn" | "signUp";

const authStackRoutes: Readonly<
  { [key in AuthStackRouteTypes]: AuthStackRouteTypes }
> = {
  intro: "intro",
  signIn: "signIn",
  signUp: "signUp"
};

export type MapStackRouteTypes = "mapView" | "camera";

const mapStackRoutes: Readonly<
  { [key in MapStackRouteTypes]: MapStackRouteTypes }
> = {
  camera: "camera",
  mapView: "mapView"
};

export default {
  mainStackRoutes,
  authStackRoutes,
  mapStackRoutes,
  initializationStackRoutes
};
