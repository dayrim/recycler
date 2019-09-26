import * as M from "constants/materials";
import materialData from "data/wood.json";

const initState = materialData;
export default (state = initState, { payload, type }) => {
  switch (type) {
    case M.ADD_MATERIAL:
      return [...state, payload];

    default:
      return [...state];
  }
};

export const getMaterials = state => state.materials;
