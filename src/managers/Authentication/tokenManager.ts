import * as Keychain from "react-native-keychain";
import Token, { TokenParams } from "../../entity/Authentication/Token";
import env from "../../env";
import { errorHandler } from "../../logics/error";

const KEYCHAIN_USERNAME = "token";

export default class TokenManager {
  authToken?: Token;

  constructor(props: { token: Token } | null) {
    if (props && props.token) {
      this.authToken = props.token;
    }
    this.setAccessToken();
  }

  static createToken = (params: TokenParams): Token => {
    return new Token(params);
  };

  static saveAccessToken = (token: Token): Promise<any> => {
    return Keychain.setInternetCredentials(
      env.API_ENDPOINT,
      KEYCHAIN_USERNAME,
      JSON.stringify(token)
    );
  };

  static loadAccessToken = (): Promise<Token> => {
    return Keychain.getInternetCredentials(env.API_ENDPOINT)
      .then(credential => {
        if (credential && credential.password) {
          return JSON.parse(credential.password);
        }
        return null;
      })
      .catch(error => {
        errorHandler(error);
      });
  };

  async setAccessToken() {
    const token = await TokenManager.loadAccessToken();
    this.authToken = token;
  }
}
