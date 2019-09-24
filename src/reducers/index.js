import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UI from "reducers/UI";

export default history =>
  combineReducers({
    router: connectRouter(history),

    UI
  });
