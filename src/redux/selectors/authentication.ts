import { State } from "../rootReducer";
import { datetimeToDateformatter } from "../../helper/formatter";

type SignInSelected = {
  username: string;
  password: string;
};

export const signInSelector = (state: State): SignInSelected => {
  const { usernameForm, passwordForm } = state.authentication;
  return { username: usernameForm.value, password: passwordForm.value };
};

type SignUpSelected = {
  username: string;
  password: string;
  email: string;
  birthday: string;
};

export const signUpSelector = (state: State): SignUpSelected => {
  const {
    usernameForm,
    passwordForm,
    emailForm,
    birthdayForm,
  } = state.authentication;
  const convertedBirthday = datetimeToDateformatter(birthdayForm.value);
  return {
    username: usernameForm.value,
    password: passwordForm.value,
    email: emailForm.value,
    birthday: convertedBirthday,
  };
};

export const usernameSelector = (state: State): string => {
  const { usernameForm } = state.authentication;
  return usernameForm.value;
};

export const passwordSelector = (state: State): string => {
  const { passwordForm } = state.authentication;
  return passwordForm.value;
};

export const emailSelector = (state: State): string => {
  const { emailForm } = state.authentication;
  return emailForm.value;
};
