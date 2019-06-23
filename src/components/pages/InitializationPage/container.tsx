import { connect } from "react-redux";
import { Dispatch } from "../../../redux/types";
import InitializationPage from "./component";

export type DispatchProps = {
  dispatch: Dispatch;
};

export default connect(
  null,
  (dispatch: Dispatch): DispatchProps => {
    return {
      dispatch
    };
  }
)(InitializationPage);
