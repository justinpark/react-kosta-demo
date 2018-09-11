import {
  ADD_RESOURCE,
  LOADED_RESOURCE,
  LOADING_RESOURCE,
  REQUEST_RESOURCE,
  UPDATE_PRICE,
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

export function fetchAll() {
  return {
    type: REQUEST_RESOURCE,
    promise: Api.get('transactions?_limit=10'),
    meta: {
      toast: {
        onSuccess: '성공적이였습니다',
        onFailure: '접속에 문제가 있습니다',
      },
    },
  };
}

export function updatePrice(id, price) {
  return {
    type: UPDATE_PRICE,
    promise: Api.put('transactions'),
    payload: { id, price },
  };
}
