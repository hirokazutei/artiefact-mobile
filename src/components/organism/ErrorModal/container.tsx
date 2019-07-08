import { Dispatch } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/reducers/error/actionTypes";
import { State } from "../../../redux/rootReducer";
import { IconTypes } from "../../atoms/Icon";
import ErrorModal from "./component";

export type StateProps = {
  icon?: IconTypes;
  message: string;
  isVisible: boolean;
};

export type DispatchProps = {
  onPress: () => void;
};

export default connect(
  (state: State): StateProps => {
    const { showModal, message, icon } = state.error;
    return {
      icon,
      message,
      isVisible: showModal
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
