import React from "react";
import MapViewTemplate from "../../templates/MapViewTemplate";
import { NavigationProps } from "../../../navigation/type";

type Props = NavigationProps;

class MapViewPage extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <MapViewTemplate {...this.props} />;
  }
}

export default MapViewPage;
