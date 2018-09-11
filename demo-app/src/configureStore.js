import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from './reducers';

const finalCreateStore = devToolsEnhancer({ name: '비트코인앱' })(createStore);

export default (initState) => {
  return finalCreateStore(combineReducers(reducers), initState);
}
