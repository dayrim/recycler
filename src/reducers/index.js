import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UI from "reducers/UI";
import materials from "reducers/materials";
import user from "reducers/user";

export default history =>
  combineReducers({
    router: connectRouter(history),
    materials,
    UI,
    user
  });
