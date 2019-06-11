import { State } from "../rootReducer";

export const signInSelector = (
  state: State
): { username: string; password: string } => {
  const { username, password } = state.authentication;
  return { username, password };
};

export const signUnSelector = (
  state: State
): { username: string; password: string; email: string; birthdate: Date } => {
  const { username, password, email, birthdate } = state.authentication;
  return { username, password, email, birthdate };
};
