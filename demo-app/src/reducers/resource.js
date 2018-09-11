import {
  ADD_RESOURCE,
  LOADING_RESOURCE,
  LOADED_RESOURCE,
} from '../actions/resourceActionTypes';

const initialState = {
  isLoading: false,
  hasFetched: false,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  if (type === ADD_RESOURCE) {
    return {
      ...state,
      isLoading: false,
      hasFetched: true,
    };
  } else if (type === LOADING_RESOURCE) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (type === LOADED_RESOURCE) {
    const { data } = payload;
    return {
      ...state,
      isLoading: false,
      entities: data,
    };
  }
  return state;
}
