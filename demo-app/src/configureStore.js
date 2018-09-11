import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import { devToolsEnhancer } from 'redux-devtools-extension';
import compose from 'recompose/compose';

import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, reduxPackMiddleware),
  devToolsEnhancer({ name: '비트코인앱' }),
)(createStore);

export default (initState) => {
  return finalCreateStore(combineReducers(reducers), initState);
}
