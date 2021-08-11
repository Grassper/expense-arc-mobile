import {HomeActionType, HomeType} from '@/root/src/types';

import {ActionTypes} from './actionTypes';

const error = {
    errorOccurred: false,
    errorMessage: ''
};

const filters = {
    overviewFilter: 'monthly',
    transactionFilter: 'expense'
};

const stats = {
    income: 0,
    expense: 0,
    incomeTransaction: [],
    expenseTransaction: []
};

const dashboard = {
    budget: 0,
    budgetConsumed: 0,
    averageConsumption: 0,
    todayConsumed: 0
};

const initialState = {
    loading: false,
    ...dashboard,
    ...stats,
    ...filters,
    ...error
};

export const homeReducer = (
    state: HomeType = initialState,
    action: HomeActionType<string>
): HomeType => {
    switch (action.type) {
        case ActionTypes.FETCH_OVERVIEW_START:
            return {
                ...state,
                loading: true,
                errorOccurred: false,
                errorMessage: ''
            };
        case ActionTypes.FETCH_OVERVIEW_SUCCESS:
            return {
                ...state
            };
        case ActionTypes.FETCH_OVERVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                errorOccurred: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};
