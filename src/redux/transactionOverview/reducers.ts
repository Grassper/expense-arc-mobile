import {
    GraphFilterType,
    ReducerActionTypes,
    TransactionFilterType,
    TransactionOverviewType
} from './types';

const error = {
    errorOccurred: false,
    errorMessage: ''
};

const filter = {
    graphFilter: 'monthly' as GraphFilterType,
    transactionFilter: 'expense' as TransactionFilterType
};

const stats = {
    candlePercents: [],
    income: 0,
    expense: 0,
    incomeTransaction: [],
    expenseTransaction: []
};

const initialState = {
    loading: false,
    ...stats,
    ...filter,
    ...error
};

export const transactionOverview = (
    state: TransactionOverviewType = initialState,
    action: ReducerActionTypes
): TransactionOverviewType => {
    switch (action.type) {
        default:
            return state;
    }
};
