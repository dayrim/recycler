import * as layoutTypes from '../constants/layout.js'

const initState = {
  topmenuToggled: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case layoutTypes.TOGGLE_TOPMENU:
      return Object.assign({}, state, {
        topmenuToggled: action.payload
      })
    default:
      return state;
  }
};

export default reducer;