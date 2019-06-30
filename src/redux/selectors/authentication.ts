import { State } from "../rootReducer";
import { datetimeToDateformatter } from "../../helper/formatter";

type SignInSelected = {
  username: string;
  password: string;
};

export const signInSelector = (state: State): SignInSelected => {
  const { username, password } = state.authentication;
  return { username, password };
};

type SignUpSelected = {
  username: string;
  password: string;
  email: string;
  birthday: string;
};

export const signUpSelector = (state: State): SignUpSelected => {
  const { username, password, email, birthday } = state.authentication;
  const convertedBirthday = datetimeToDateformatter(birthday);
  return { username, password, email, birthday: convertedBirthday };
};

type CheckUsernameAvailabilitySelected = {
  username: string;
};

export const checkUsernameAvailabilitySelector = (
  state: State
): CheckUsernameAvailabilitySelected => {
  const { username } = state.authentication;
  return { username };
};
