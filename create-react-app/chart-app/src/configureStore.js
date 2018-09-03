import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

export default (initState) => {
  return createStore(combineReducers(reducers), initState);
}
