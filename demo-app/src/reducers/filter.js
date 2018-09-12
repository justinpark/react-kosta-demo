import { SET_FILTER } from '../actions/filterActionTypes';

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
}
