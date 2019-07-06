import { NetInfo } from "react-native";

type NetworkChangeHandler = (result: boolean) => void;

export default class Network {
  public static async isConnected(): Promise<Boolean> {
    return NetInfo.isConnected.fetch().then(isConnected => {
      return isConnected;
    });
  }

  public static startListeningConnectionChange = (
    handler: NetworkChangeHandler
  ) => {
    NetInfo.isConnected.addEventListener("connectionChange", handler);
  };

  public static stopListeningConnectionChange = (
    handler: NetworkChangeHandler
  ) => {
    NetInfo.isConnected.removeEventListener("connectionChange", handler);
  };
}
