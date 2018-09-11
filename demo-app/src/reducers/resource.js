import { handle } from 'redux-pack';
import {
  ADD_RESOURCE,
  LOADING_RESOURCE,
  LOADED_RESOURCE,
  REQUEST_RESOURCE,
} from '../actions/resourceActionTypes';

export const initialState = {
  isLoading: false,
  hasFetched: false,
};

export default function(state = initialState, action = {}) {
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
  } else if (type === REQUEST_RESOURCE) {
    const { data } = payload || {};
    return handle(state, action, {
      start: prevState => ({ ...prevState, isLoading: true }),
      success: prevState => ({
        ...prevState,
        entities: data,
        isLoading: true,
      }),
      finish: prevState => ({ ...prevState, isLoading: false }),
    });
  }
  return state;
}
