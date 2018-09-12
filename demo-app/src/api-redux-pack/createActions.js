import {
  LIFECYCLE,
  SUCCESS,
} from 'redux-pack';
import {
  INIT,
  FETCH_ALL,
  UPDATE,
  CREATE,
} from './actionTypes';
import Api from '../Api';


export default (resourceName, key = 'id') => ({
  init: (data) => ({
    type: INIT,
    meta: {
      resourceName,
    },
    payload: { data },
  }),
  fetch: () => {},
  fetchAll: (params = {}) => {
    const { query } = params;
    const qs = query
      ? '?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
      : '';
    return {
      type: FETCH_ALL,
      promise: Api.get(`${resourceName}${qs}`),
      meta: {
        ...params.meta,
        key,
        resourceName,
      },
    };
  },
  remove: () => {},
  create: (params = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, params.data),
    meta: {
      ...params.meta,
      key,
      resourceName,
    },
  }),
  update: (id, params = {}) => ({
    type: UPDATE,
    promise: Api.put(`${resourceName}/${id}`, params.data),
    meta: {
      ...params.meta,
      key,
      resourceName,
    },
    payload: { id },
  }),
});
