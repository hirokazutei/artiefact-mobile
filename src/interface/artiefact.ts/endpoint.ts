import { RESTMethods } from "../../entity/APIClient";

export type EndpointNames = "signIn" | "signUp";
export type EndpointProperty = {
  method: RESTMethods;
  uriSuffix: EndpointNames;
};

const ENDPOINTS: Readonly<{ [key in EndpointNames]: EndpointProperty }> = {
  signIn: { uriSuffix: "signIn", method: "post" },
  signUp: { uriSuffix: "signUp", method: "post" }
};

export default ENDPOINTS;
