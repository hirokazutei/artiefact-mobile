import { Dispatch } from "redux";
import { connect } from "react-redux";
import actionCreators from "../../../redux/reducers/error/actionCreator";
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
        dispatch(actionCreators.hideErrorModalActionCreator());
      }
    };
  }
)(ErrorModal);
