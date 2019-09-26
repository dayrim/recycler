import { ofType } from "redux-observable";
import {
  mapTo,
  last,
  filter,
  map,
  catchError,
  mergeMap,
  switchMap,
  first,
  delay
} from "rxjs/operators";
import * as M from "constants/materials";
import { race, concat, Observable, from, of } from "rxjs";
import { addPopup } from "actions/UI";

export const materialConfirmationPopup = action$ =>
  action$.pipe(
    ofType(M.ADD_MATERIAL),
    mergeMap(action =>
      of(addPopup({ type: "success", message: "Material added !" }))
    )
  );
