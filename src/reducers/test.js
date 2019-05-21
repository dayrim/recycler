import { SET } from '../constants/test';

const initState = null;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET:
      return action.value;
    default:
      return state;
  }
};

export default reducer;