import store from "../../store";
import Network from "../../interface/native/network";
import { Dispatch } from "../../redux/types";
import actionCreators from "./actionCreators";

export default class ConnectionChangeHandler {
  private static instance: ConnectionChangeHandler | null;
  private static dispatch: Dispatch;

  public static get = () => {
    if (!ConnectionChangeHandler.instance) {
      ConnectionChangeHandler.instance = new ConnectionChangeHandler();
    }
  };

  private constructor() {
    Network.startListeningConnectionChange(
      ConnectionChangeHandler.netwrokChangeHandler
    );
    ConnectionChangeHandler.dispatch = store.dispatch;
    ConnectionChangeHandler.dispatch(
      actionCreators.startListeningConnectionActionCreator()
    );
  }

  public static stopListening = () => {
    Network.stopListeningConnectionChange(
      ConnectionChangeHandler.netwrokChangeHandler
    );
    ConnectionChangeHandler.dispatch(
      actionCreators.stopListeningConnectionActionCreator()
    );
  };

  private static netwrokChangeHandler = (result: boolean) => {
    ConnectionChangeHandler.dispatch(
      actionCreators.connectionChangeActionCreator(result)
    );
  };
}
