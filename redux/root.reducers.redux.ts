import {combineReducers} from 'redux';

// importing reducers
import overviewReducers from './overview/overview.reducers.redux';

const rootReducer = combineReducers({overview: overviewReducers});

export default rootReducer;
