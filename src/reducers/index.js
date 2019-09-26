import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UI from "reducers/UI";
import materials from "reducers/materials";

export default history =>
  combineReducers({
    router: connectRouter(history),
    materials,
    UI
  });
