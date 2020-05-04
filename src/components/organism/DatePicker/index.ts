import IOSDatePicker from "./ios";
import { Platform } from "react-native";

// TODO: Create Android DatePicker
export { IOSDatePicker };
export default Platform.select({ ios: IOSDatePicker, android: IOSDatePicker });
