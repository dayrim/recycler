import { combineEpics } from "redux-observable";
import * as UI from "./UI";

export default combineEpics(
    UI.autoRemovePopup,
);
