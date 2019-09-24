import * as U from "constants/UI";
import uuidv1 from "uuid";


export const addPopup = ({
  message = "This is an error message",
  type = "info",
  duration = 3000
}) => {
  return {
    type: U.INFO_POPUP.ADD,
    payload: {
      message,
      id: uuidv1(),
      type,
      duration
    }
  };
};

export const removePopup = ({ id }) => ({
  type: U.INFO_POPUP.REMOVE,
  payload: { id }
});

export const toggleTopmenu = (payload) => ({ type: U.TOGGLE_TOPMENU, payload: payload })
