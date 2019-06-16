import { RESTMethods } from "../../entity/APIClient";

export type EndpointNames = "signIn" | "signUp";
export type Endpoints = "user/sign-in" | "user/sign-up";
export type EndpointProperty = {
  method: RESTMethods;
  uriSuffix: Endpoints;
};

// Use JSON Schema to generate the correct endpoints and methods
const ENDPOINTS: Readonly<{ [key in EndpointNames]: EndpointProperty }> = {
  signIn: { uriSuffix: "user/sign-in", method: "post" },
  signUp: { uriSuffix: "user/sign-up", method: "post" }
};

export default ENDPOINTS;
