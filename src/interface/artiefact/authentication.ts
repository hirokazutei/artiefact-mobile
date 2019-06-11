import env from "../../env";
import APIClient from "../../entity/APIClient";
import endpoint, { EndpointProperty } from "./endpoint";

type SignInData = {
  username: string;
  password: string;
};

type SignUpData = {
  username: string;
  password: string;
  email: string;
  birthdate: Date;
};

// TODO: It would be ideal if the schema could ge generated from JSON schema.
export default class AuthClient extends APIClient {
  private static instance: AuthClient;

  public static get(): AuthClient {
    if (!AuthClient.instance) {
      AuthClient.instance = new AuthClient();
    }
    return AuthClient.instance;
  }

  private constructor() {
    super({ endpoint: env.API_ENDPOINT });
  }

  // The promise resolves into an API response or an error / let's not use any if possible
  public signIn(args: SignInData): Promise<any> {
    const endpointProperty = <EndpointProperty>endpoint.signIn;
    return this.methods[endpointProperty.method](endpointProperty.uriSuffix, {
      data: { ...args }
    }).then(response => {
      console.log(response);
      return response;
    });
  }

  public signUp(args: SignUpData): Promise<any> {
    const endpointProperty = <EndpointProperty>endpoint.signUp;
    return this.methods[endpointProperty.method](endpointProperty.uriSuffix, {
      data: { ...args }
    }).then(response => {
      console.log(response);
      return response;
    });
  }
}
