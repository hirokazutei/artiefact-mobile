import { connect } from "react-redux";
import { Dispatch } from "../../../redux/types";
import InitializationPage from "./component";

export type DispatchProps = {
  dispatch: Dispatch;
};

// TODO: Turn this into a functional component
export default connect(
  null,
  (dispatch: Dispatch): DispatchProps => {
    return {
      dispatch
    };
  }
)(InitializationPage);
