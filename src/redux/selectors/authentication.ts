import { State } from "../rootReducer";
import { datetimeToDateformatter } from "../../helper/formatter";

export const signInSelector = (
  state: State
): { username: string; password: string } => {
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
