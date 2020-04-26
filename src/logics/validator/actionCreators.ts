import { actions } from "./actionTypes";
import { Action } from "../../redux/types";

export const checkUsernameAvailabilityActionCreator = (): Action => {
  return { type: actions.CHECK_USERNAME_AVAILABILITY };
};
export const delayedUsernameValidationActionCreator = (): Action => {
  return { type: actions.DELAYED_USERNAME_VALIDATION };
};
export const delayedPasswordValidationActionCreator = (): Action => {
  return { type: actions.DELAYED_PASSWORD_VALIDATION };
};
export const delayedEmailValidationActionCreator = (): Action => {
  return { type: actions.DELAYED_EMAIL_VALIDATION };
};

export default {
  checkUsernameAvailabilityActionCreator,
  delayedUsernameValidationActionCreator,
  delayedPasswordValidationActionCreator,
  delayedEmailValidationActionCreator,
};
