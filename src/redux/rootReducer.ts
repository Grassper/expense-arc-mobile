import {combineReducers} from 'redux';

import {homeReducer} from '@/root/src/redux/home';

const rootReducer = combineReducers({home: homeReducer});

export default rootReducer;
