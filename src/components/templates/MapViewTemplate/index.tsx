import React from "react";
import Map, { Props } from "../../organism/Map";

const MapViewTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  return <Map {...props} />;
};

export default MapViewTemplate;
