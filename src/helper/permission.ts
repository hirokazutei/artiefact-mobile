import { Platform, PlatformOSType, Rationale } from "react-native";
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  Permission,
} from "react-native-permissions";
// Flow Referrence: https://github.com/react-native-community/react-native-permissions#ios-flow

type RequiredPermissionAccess =
  | "camera"
  | "location"
  | "locationBackground"
  | "storageRead"
  | "storageWrite";
type PlatformPermission = { [key in PlatformOSType]?: Permission };

type PermissionStatus = "unavailable" | "denied" | "blocked" | "granted";

const PERMISSION_TYPES: {
  [key in RequiredPermissionAccess]: PlatformPermission
} = {
  camera: {
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  },
  location: {
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  },
  locationBackground: {
    android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
  },
  storageRead: {
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  },
  storageWrite: {
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  },
};

export const permissionStatus: {
  [keys in PermissionStatus]: PermissionStatus
} = {
  unavailable: RESULTS.UNAVAILABLE,
  denied: RESULTS.DENIED,
  blocked: RESULTS.BLOCKED,
  granted: RESULTS.GRANTED,
};

export const checkPermission = (
  type: RequiredPermissionAccess
): Promise<PermissionStatus> => {
  return check(Platform.select(PERMISSION_TYPES[type]));
};

export const checkPermissions = (
  types: Array<RequiredPermissionAccess>
): Promise<Array<PermissionStatus>> => {
  return Promise.all(
    types.map((type) => check(Platform.select(PERMISSION_TYPES[type])))
  );
};

export const requestPermission = ({
  type,
  rationale,
}: {
  type: RequiredPermissionAccess;
  rationale: Rationale;
}): Promise<PermissionStatus> => {
  return request(Platform.select(PERMISSION_TYPES[type]), rationale);
};

// Initial Start-up Check.
// Store in redux.
// If permission is available --> Use the feature but have a failsafe
// If permission is unavailable --> Get permission and store it in state
