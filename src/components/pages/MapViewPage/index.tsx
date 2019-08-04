import React from "react";
import MapViewTemplate from "../../templates/MapViewTemplate";
import { NavigationProps } from "../../../navigation/type";

type Props = NavigationProps;

const MapViewPage: React.FC<Props> = (props: Props): React.ReactElement => {
  return <MapViewTemplate {...props} />;
};

export default MapViewPage;
