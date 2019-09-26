import * as M from "constants/materials";

export const addMaterial = payload => ({
  type: M.ADD_MATERIAL,
  payload: payload
});
