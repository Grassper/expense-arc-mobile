import {ExpenseSchema, IncomeSchema} from '@/root/src/types/transaction';

import {
    FilterType,
    ResetAverageConsumption,
    ResetBudget,
    ResetBudgetConsumed,
    ResetErrorOccurred,
    ResetExpense,
    ResetExpenseTransaction,
    ResetIncome,
    ResetIncomeTransaction,
    ResetOverviewFilter,
    ResetTodayConsumed,
    ResetTransactionFilter,
    SetAverageConsumption,
    SetBudget,
    SetBudgetConsumed,
    SetErrorOccurred,
    SetExpense,
    SetExpenseTransaction,
    SetIncome,
    SetIncomeTransaction,
    SetOverviewFilter,
    SetTodayConsumed,
    SetTransactionFilter,
    TransactionFilterType
} from './types';

export const ActionReduxTypes = {
    SET_BUDGET: 'SET_BUDGET',
    RESET_BUDGET: 'RESET_BUDGET',
    SET_BUDGET_CONSUMED: 'SET_BUDGET_CONSUMED',
    RESET_BUDGET_CONSUMED: 'RESET_BUDGET_CONSUMED',
    SET_AVERAGE_CONSUMPTION: 'SET_AVERAGE_CONSUMPTION',
    RESET_AVERAGE_CONSUMPTION: 'RESET_AVERAGE_CONSUMPTION',
    SET_TODAY_CONSUMED: 'SET_TODAY_CONSUMED',
    RESET_TODAY_CONSUMED: 'RESET_TODAY_CONSUMED'
};

/**
 * dashboard
 */

// budget

export const setBudget = (budget: number): SetBudget => ({
    type: 'SET_BUDGET',
    payload: budget
});

export const resetBudget = (): ResetBudget => ({
    type: 'RESET_BUDGET',
    payload: 0
});

// budget consumed

export const setBudgetConsumed = (consumed: number): SetBudgetConsumed => ({
    type: 'SET_BUDGET_CONSUMED',
    payload: consumed
});

export const resetBudgetConsumed = (): ResetBudgetConsumed => ({
    type: 'RESET_BUDGET_CONSUMED',
    payload: 0
});

// average consumption

export const setAverageConsumption = (
    consumed: number
): SetAverageConsumption => ({
    type: 'SET_AVERAGE_CONSUMPTION',
    payload: consumed
});

export const resetAverageConsumption = (): ResetAverageConsumption => ({
    type: 'RESET_AVERAGE_CONSUMPTION',
    payload: 0
});

// today consumed

export const setTodayConsumed = (consumed: number): SetTodayConsumed => ({
    type: 'SET_TODAY_CONSUMED',
    payload: consumed
});

export const resetTodayConsumed = (): ResetTodayConsumed => ({
    type: 'RESET_TODAY_CONSUMED',
    payload: 0
});

/**
 * stats
 */

// income

export const setIncome = (income: number): SetIncome => ({
    type: 'SET_INCOME',
    payload: income
});

export const resetIncome = (): ResetIncome => ({
    type: 'RESET_INCOME',
    payload: 0
});

// expense

export const setExpense = (expense: number): SetExpense => ({
    type: 'SET_EXPENSE',
    payload: expense
});

export const resetExpense = (): ResetExpense => ({
    type: 'RESET_EXPENSE',
    payload: 0
});

// income transaction

export const setIncomeTransaction = (
    transaction: IncomeSchema[]
): SetIncomeTransaction => ({
    type: 'SET_INCOME_TRANSACTION',
    payload: transaction
});

export const resetIncomeTransaction = (): ResetIncomeTransaction => ({
    type: 'RESET_INCOME_TRANSACTION',
    payload: []
});

// expense transaction

export const setExpenseTransaction = (
    transaction: ExpenseSchema[]
): SetExpenseTransaction => ({
    type: 'SET_EXPENSE_TRANSACTION',
    payload: transaction
});

export const resetExpenseTransaction = (): ResetExpenseTransaction => ({
    type: 'RESET_EXPENSE_TRANSACTION',
    payload: []
});

/**
 * filters
 */

// overview filter

export const setOverviewFilter = (filter: FilterType): SetOverviewFilter => ({
    type: 'SET_OVERVIEW_FILTER',
    payload: filter
});

export const resetOverviewFilter = (): ResetOverviewFilter => ({
    type: 'RESET_OVERVIEW_FILTER',
    payload: 'monthly'
});

// transaction filter

export const setTransactionFilter = (
    filter: TransactionFilterType
): SetTransactionFilter => ({
    type: 'SET_TRANSACTION_FILTER',
    payload: filter
});

export const resetTransactionFilter = (): ResetTransactionFilter => ({
    type: 'RESET_TRANSACTION_FILTER',
    payload: 'expense'
});

/**
 * error
 */

// error occurred

export const setErrorOccurred = (message: string): SetErrorOccurred => ({
    type: 'SET_ERROR_OCCURRED',
    payload: message
});

export const resetErrorOccurred = (): ResetErrorOccurred => ({
    type: 'RESET_ERROR_OCCURRED'
});
