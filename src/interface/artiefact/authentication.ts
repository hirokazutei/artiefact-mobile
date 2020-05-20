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
  birthday: string;
};

type getUserData = {
  bearerToken: string;
};

type CheckUsernameAvailabilityData = {
  username: string;
};

export default class AuthClient extends APIClient {
  private static instance: AuthClient;

  public static get(): AuthClient {
    if (!AuthClient.instance) {
      AuthClient.instance = new AuthClient();
    }
    return AuthClient.instance;
  }

  private constructor() {
    super({ endpoint: env.API_ENDPOINT || "" });
  }

  public signIn(args: SignInData): Promise<any> {
    const endpointProperty = <EndpointProperty>endpoint.signIn;
    return this.methods[endpointProperty.method](
      endpointProperty.uriSuffix,
      {
        data: { ...args },
      },
      true
    );
  }

  public signUp(args: SignUpData): Promise<any> {
    const endpointProperty = <EndpointProperty>endpoint.signUp;
    return this.methods[endpointProperty.method](
      endpointProperty.uriSuffix,
      {
        data: { ...args },
      },
      true
    );
  }

  public getUser(args: getUserData): Promise<any> {
    const endpointProperty = <EndpointProperty>endpoint.getUser;
    return this.methods[endpointProperty.method](
      endpointProperty.uriSuffix,
      {
        headers: { Authorization: args.bearerToken },
      },
      true
    );
  }

  public checkUsernameAvailability(
    args: CheckUsernameAvailabilityData
  ): Promise<any> {
    const endpointProperty = <EndpointProperty>(
      endpoint.checkUsernameAvailability
    );
    return this.methods[endpointProperty.method](endpointProperty.uriSuffix, {
      queryParams: { ...args },
    });
  }
}
