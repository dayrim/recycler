import { combineEpics } from "redux-observable";
import * as UI from "./UI";
import * as M from "./materials";

export default combineEpics(UI.autoRemovePopup, M.materialConfirmationPopup);
