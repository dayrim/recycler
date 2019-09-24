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
import * as U from "../constants/UI";
import { race, concat, Observable, from, of } from "rxjs";

export const autoRemovePopup = action$ =>
  action$.pipe(
    ofType(U.INFO_POPUP.ADD),
    mergeMap(action =>
      of({
        type: U.INFO_POPUP.REMOVE,
        payload: { id: action.payload.id }
      }).pipe(delay(action.payload.duration))
    )
  );
