import {combineReducers} from 'redux';

import {categories} from '@/root/src/redux/categories';
import {home} from '@/root/src/redux/home';
import {transactionOverview} from '@/root/src/redux/transactionOverview';
import {transferTypes} from '@/root/src/redux/transferTypes';

const rootReducer = combineReducers({
    home,
    transactionOverview,
    categories,
    transferTypes
});

export default rootReducer;
