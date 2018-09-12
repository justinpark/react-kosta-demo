import { SET_FILTER } from '../actions/filterActionTypes';

export function setFilter(filterKey, filterValue) {
  return {
    type: SET_FILTER,
    payload: {
      [filterKey]: filterValue,
    },
  };
}
