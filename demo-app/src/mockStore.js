import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { middleware } from 'redux-pack';

export default configureStore([thunk, middleware]);
