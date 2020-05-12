import { Dispatch } from "redux";
import { connect } from "react-redux";
import SignInPage from "./component";
import { initizationActionCreator } from "../../../logics/initialization/actionCreator";

type DispatchProps = {
  initialize: () => void;
};

export { DispatchProps };

export default connect<null, DispatchProps, null, null>(
  null,
  (dispatch: Dispatch): DispatchProps => {
    return {
      initialize: () => {
        dispatch(initizationActionCreator());
      },
    };
  }
)(SignInPage);
