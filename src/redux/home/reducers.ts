import {HomeType} from '@/root/src/types';

const error = {
    errorOccurred: false,
    errorMessage: ''
};

const filters = {
    overviewFilter: 'Monthly',
    transactionFilter: 'Expense'
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

interface ActionType<Payload> {
    type: string;
    payload: Payload;
}

export const home = (
    state: HomeType = initialState,
    action: ActionType<string>
): HomeType => {
    switch (action.type) {
        default:
            return state;
    }
};
