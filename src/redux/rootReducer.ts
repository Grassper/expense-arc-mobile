import {combineReducers} from 'redux';

import {home} from '@/root/src/redux/home';
import {transactionOverview} from '@/root/src/redux/transactionOverview';

const rootReducer = combineReducers({home, transactionOverview});

export default rootReducer;
