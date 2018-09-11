import {
  ADD_RESOURCE,
  LOADED_RESOURCE,
  LOADING_RESOURCE,
} from './resourceActionTypes';

function addResourceAction() {
  return {
    type: ADD_RESOURCE,
  };
}

function loadingResourceAction() {
  return {
    type: LOADING_RESOURCE,
  };
}

function loadedResourceAction(data) {
  return {
    type: LOADED_RESOURCE,
    payload: {
      data,
    },
  };
}
