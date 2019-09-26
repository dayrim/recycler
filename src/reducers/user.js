import * as U from "constants/user";

const initState = { loggedIn: false };
export default (state = initState, { payload, type }) => {
  switch (type) {
    case U.SET_USER_LOGGED_IN:
      return { ...state, loggedIn: payload };

    default:
      return { ...state };
  }
};

export const getUserLoggedIn = state => state.user.loggedIn;
