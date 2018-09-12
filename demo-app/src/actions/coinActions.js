import createActions from '../api-redux-pack/createActions';

export const {
  init,
  fetch,
  fetchAll,
  remove,
  create,
} = createActions('coins', 'code');
