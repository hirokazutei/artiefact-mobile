import { UserState } from "./types";
import { Action } from "redux";

const DEFAULT_USER_STATE = {
  userID: null,
  username: null,
  handle: null,
  profilePic: null,
  website: null,
  bio: null,
  email: null,
  phoneNumber: null,
  gender: null
};

export const accountReducer = (
  state: UserState = DEFAULT_USER_STATE,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
