import * as U from "constants/user";

export const setLoggedIn = payload => ({
  type: U.SET_LOGGED_IN,
  payload: payload
});
