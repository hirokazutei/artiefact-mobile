import * as Keychain from "react-native-keychain";
import Token, { TokenResponse } from "../../entity/Authentication/Token";
import env from "../../env";
import { errorHandler } from "../../logics/error";

const KEYCHAIN_USERNAME = "token";

export default class TokenManager {
  authToken?: Token;

  constructor({ tokenObject }: { tokenObject: Token }) {
    if (tokenObject) {
      this.authToken = tokenObject;
      TokenManager.saveAccessToken(tokenObject)
        .then(
          (): void => {
            return;
          }
        )
        .catch(error => {
          errorHandler(error);
        });
      return;
    }
    this.setAccessToken();
  }

  static clearAccessToken = (): Promise<any> => {
    return Keychain.resetInternetCredentials(env.API_ENDPOINT);
  };

  static createToken = (params: TokenResponse): Token => {
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
      .then(credentials => {
        if (credentials && credentials.password) {
          return JSON.parse(credentials.password);
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
