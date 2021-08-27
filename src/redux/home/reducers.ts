import {
    FilterType,
    InitialState,
    ReducerActionTypes,
    TransactionFilterType
} from './types';

const error = {
    errorOccurred: false,
    errorMessage: ''
};

const filters = {
    overviewFilter: 'monthly' as FilterType,
    transactionFilter: 'expense' as TransactionFilterType
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

export const home = (
    state: InitialState = initialState,
    action: ReducerActionTypes
): InitialState => {
    switch (action.type) {
        default:
            return state;
    }
};
