import {combineReducers} from 'redux';

import {overviewReducer} from '@/root/src/redux/overview';

const rootReducer = combineReducers({overview: overviewReducer});

export default rootReducer;
