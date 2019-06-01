import { State } from "../rootReducer";

export const loginSelector = (
  state: State
): { username: string; password: string } => {
  const { username, password } = state.authentication;
  return { username, password };
};
