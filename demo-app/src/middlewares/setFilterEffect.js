import { SET_FILTER } from '../actions/filterActionTypes';
import { fetchTransactions } from '../actions/transactionActions';

export default store => next => action => {
  if (!action) return null;
  const result = next(action);

  if (action.type === SET_FILTER) {
    store.dispatch(fetchTransactions());
  }
  
  return result;
}
