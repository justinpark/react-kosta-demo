import createActions from '../api-redux-pack/createActions';

export const {
  fetch,
  fetchAll,
  remove,
  create,
} = createActions('coins', 'code');
