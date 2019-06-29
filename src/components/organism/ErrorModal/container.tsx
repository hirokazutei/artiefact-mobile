import { Dispatch } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/reducers/error/actionTypes";
import { State } from "../../../redux/rootReducer";
import ErrorModal from "./component";

export type StateProps = {
  message: string;
  isVisible: boolean;
};

export type DispatchProps = {
  onPress: () => void;
};

export default connect(
  (state: State): StateProps => {
    const { showErrorModal, errorMessage } = state.error;
    return {
      message: errorMessage,
      isVisible: showErrorModal
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onPress: () => {
        dispatch({
          type: actions.HIDE_ERROR_MODAL
        });
      }
    };
  }
)(ErrorModal);
