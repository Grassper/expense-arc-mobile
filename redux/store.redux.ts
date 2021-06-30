import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducers.redux';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
