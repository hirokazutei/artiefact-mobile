import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Region } from "react-native-maps";
import Map from "./component";
import reduxActionCreators from "../../../redux/reducers/tracking/actionCreators";
import { State } from "../../../redux/rootReducer";

export type StateProps = {
  region?: Region;
};

export type DispatchProps = {
  updateCurrentRegion: (region: Region) => void;
};

export default connect(
  (state: State): StateProps => {
    const { currentRegion } = state.tracking;
    return {
      region: currentRegion
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      updateCurrentRegion: (region: Region) => {
        dispatch(reduxActionCreators.updateCurrentRegionActionCreator(region));
      }
    };
  }
)(Map);
