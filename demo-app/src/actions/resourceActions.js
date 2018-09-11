import {
  ADD_RESOURCE,
  LOADED_RESOURCE,
  LOADING_RESOURCE,
} from './resourceActionTypes';

import Api from '../Api';

export function addResourceAction() {
  return {
    type: ADD_RESOURCE,
  };
}

export function loadingResourceAction() {
  return {
    type: LOADING_RESOURCE,
  };
}

export function loadedResourceAction(data) {
  return {
    type: LOADED_RESOURCE,
    payload: {
      data,
    },
  };
}

export function fetchTransaction() {
  return dispatch => {
    dispatch(loadingResourceAction());
    return Api.get('transactions').then(({ data }) => {
      dispatch(loadedResourceAction(data));
    });
  };
}
