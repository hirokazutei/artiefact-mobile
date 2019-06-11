import { RESTMethods } from "../../entity/APIClient";

export type EndpointNames = "signIn" | "signUp";
export type Endpoints = "user/signin" | "user/signup";
export type EndpointProperty = {
  method: RESTMethods;
  uriSuffix: Endpoints;
};

const ENDPOINTS: Readonly<{ [key in EndpointNames]: EndpointProperty }> = {
  signIn: { uriSuffix: "user/signin", method: "post" },
  signUp: { uriSuffix: "user/signup", method: "post" }
};

export default ENDPOINTS;
