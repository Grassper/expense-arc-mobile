import {overviewTypes} from './overview.types.redux';
import {Action, Overview} from './overviewTypes';

const INITIAL_STATE = {
    loading: false,
    errorOccured: false,
    errorMessage: '',
    budget: 0,
    budgetConsumed: 0,
    averageConsumption: 0,
    todayConsumed: 0,
    overviewFilter: 'monthly',
    transactionFilter: 'expense',
    income: 0,
    expense: 0,
    incomeTransaction: [],
    expenseTransaction: []
};

const overviewReducers = (
    state: Overview = INITIAL_STATE,
    action: Action<string>
): Overview => {
    switch (action.type) {
        case overviewTypes.FETCH_OVERVIEW_START:
            return {
                ...state,
                loading: true,
                errorOccured: false,
                errorMessage: ''
            };
        case overviewTypes.FETCH_OVERVIEW_SUCCESS:
            return {
                ...state
            };
        case overviewTypes.FETCH_OVERVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                errorOccured: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default overviewReducers;
