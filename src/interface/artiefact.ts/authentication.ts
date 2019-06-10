import env from "../../env";
import APIClient from "../../entity/APIClient";
import endpoint, { EndpointNames, EndpointProperty } from "./endpoint";

type SignInData = {
  username: string;
  password: string;
};

type SignUpData = {
  username: string;
  password: string;
  email: string;
  birthday: string;
};

// TODO: It would be ideal if the schema could ge generated from JSON schema.
export default class AuthClient extends APIClient {
  constructor() {
    super({ endpoint: env.API_ENDPOINT });
  }

  // Maybe these should fetch values from a selector so that no argument needs to be passed in?
  signIn(args: SignInData): Promise<any> {
    const name = <EndpointNames>arguments.callee.toString();
    const endpointProperty = <EndpointProperty>endpoint[name];
    return this.methods[endpointProperty.method](endpointProperty.uriSuffix, {
      data: { ...args }
    });
  }

  signUp(args: SignUpData): Promise<any> {
    const name = <EndpointNames>arguments.callee.toString();
    const endpointProperty = <EndpointProperty>endpoint[name];
    return this.methods[endpointProperty.method](endpointProperty.uriSuffix, {
      data: { ...args }
    });
  }
}
