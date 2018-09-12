import {
  FETCH_ALL,
  UPDATE,
} from './actionTypes';
import Api from '../Api';

export default (resourceName, key = 'id') => ({
  fetch: () => {},
  fetchAll: (params = {}) => ({
    type: FETCH_ALL,
    promise: Api.get(resourceName),
    meta: {
      ...params.meta,
      key,
      resourceName,
    },
  }),
  remove: () => {},
  create: () => {},
  update: (id, params = {}) => ({
    type: FETCH_ALL,
    promise: Api.put(`${resourceName}/${id}`, params.data),
    meta: {
      ...params.meta,
      key,
      resourceName,
    },
    payload: { id },
  }),
});
