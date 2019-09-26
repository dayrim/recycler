import * as U from "constants/UI";

const initState = {
  infoPopups: {},
  topmenuToggled: true,
  tabPage: "/forseller"
};

export default (state = initState, { payload, type }) => {
  switch (type) {
    case U.INFO_POPUP.ADD:
      return {
        ...state,
        infoPopups: { ...state.infoPopups, [payload.id]: payload }
      };
    case U.INFO_POPUP.REMOVE:
      const newsState = Object.assign({}, state.infoPopups);
      delete newsState[payload.id];
      return {
        ...state,
        infoPopups: newsState
      };
    case U.TOGGLE_TOPMENU:
      return { ...state, topmenuToggled: payload };
    case U.SET_TAB_PAGE:
      return { ...state, tabPage: payload };
    default:
      return { ...state };
  }
};

export const getMenuToggled = state => state.UI.topmenuToggled;
export const getTabPage = state => state.UI.tabPage;
export const getInfoPopups = state => state.UI.infoPopups;
export const getLatestPopup = state => {
  const popups = Object.values(state.UI.infoPopups);
  return popups.length ? popups[popups.length - 1] : null;
};
