import { Region } from "react-native-maps";

export const getCurrentLocation = (): Region => {
  navigator.geolocation.getCurrentPosition(region => region);
  // Gotta use context to get dispatch
};
