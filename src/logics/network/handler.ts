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
    ConnectionChangeHandler.dispatch = store.dispatch;
  };

  private constructor() {
    Network.startListeningConnectionChange(
      ConnectionChangeHandler.netwrokChangeHandler
    );
    ConnectionChangeHandler.dispatch(
      actionCreators.startListeningConnectionAction()
    );
  }

  public static stopListening = () => {
    Network.stopListeningConnectionChange(
      ConnectionChangeHandler.netwrokChangeHandler
    );
    ConnectionChangeHandler.dispatch(
      actionCreators.stopListeningConnectionAction()
    );
  };

  private static netwrokChangeHandler = (result: boolean) => {
    ConnectionChangeHandler.dispatch(
      actionCreators.connectionChangeAction(result)
    );
  };
}
