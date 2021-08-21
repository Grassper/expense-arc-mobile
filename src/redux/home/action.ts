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
    SET_HO_BUDGET: 'SET_HO_BUDGET',
    RESET_HO_BUDGET: 'RESET_HO_BUDGET',
    SET_HO_BUDGET_CONSUMED: 'SET_HO_BUDGET_CONSUMED',
    RESET_HO_BUDGET_CONSUMED: 'RESET_HO_BUDGET_CONSUMED',
    SET_HO_AVERAGE_CONSUMPTION: 'SET_HO_AVERAGE_CONSUMPTION',
    RESET_HO_AVERAGE_CONSUMPTION: 'RESET_HO_AVERAGE_CONSUMPTION',
    SET_HO_TODAY_CONSUMED: 'SET_HO_TODAY_CONSUMED',
    RESET_HO_TODAY_CONSUMED: 'RESET_HO_TODAY_CONSUMED',
    SET_HO_INCOME: 'SET_HO_INCOME',
    RESET_HO_INCOME: 'RESET_HO_INCOME',
    SET_HO_EXPENSE: 'SET_HO_EXPENSE',
    RESET_HO_EXPENSE: 'RESET_HO_EXPENSE',
    SET_HO_INCOME_TRANSACTION: 'SET_HO_INCOME_TRANSACTION',
    RESET_HO_INCOME_TRANSACTION: 'RESET_HO_INCOME_TRANSACTION',
    SET_HO_EXPENSE_TRANSACTION: 'SET_HO_EXPENSE_TRANSACTION',
    RESET_HO_EXPENSE_TRANSACTION: 'RESET_HO_EXPENSE_TRANSACTION',
    SET_HO_OVERVIEW_FILTER: 'SET_HO_OVERVIEW_FILTER',
    RESET_HO_OVERVIEW_FILTER: 'RESET_HO_OVERVIEW_FILTER',
    SET_HO_TRANSACTION_FILTER: 'SET_HO_TRANSACTION_FILTER',
    RESET_HO_TRANSACTION_FILTER: 'RESET_HO_TRANSACTION_FILTER',
    SET_HO_ERROR_OCCURRED: 'SET_HO_ERROR_OCCURRED',
    RESET_HO_ERROR_OCCURRED: 'RESET_HO_ERROR_OCCURRED'
};

/**
 * dashboard
 */

// budget

export const setBudget = (budget: number): SetBudget => ({
    type: 'SET_HO_BUDGET',
    payload: budget
});

export const resetBudget = (): ResetBudget => ({
    type: 'RESET_HO_BUDGET',
    payload: 0
});

// budget consumed

export const setBudgetConsumed = (consumed: number): SetBudgetConsumed => ({
    type: 'SET_HO_BUDGET_CONSUMED',
    payload: consumed
});

export const resetBudgetConsumed = (): ResetBudgetConsumed => ({
    type: 'RESET_HO_BUDGET_CONSUMED',
    payload: 0
});

// average consumption

export const setAverageConsumption = (
    consumed: number
): SetAverageConsumption => ({
    type: 'SET_HO_AVERAGE_CONSUMPTION',
    payload: consumed
});

export const resetAverageConsumption = (): ResetAverageConsumption => ({
    type: 'RESET_HO_AVERAGE_CONSUMPTION',
    payload: 0
});

// today consumed

export const setTodayConsumed = (consumed: number): SetTodayConsumed => ({
    type: 'SET_HO_TODAY_CONSUMED',
    payload: consumed
});

export const resetTodayConsumed = (): ResetTodayConsumed => ({
    type: 'RESET_HO_TODAY_CONSUMED',
    payload: 0
});

/**
 * stats
 */

// income

export const setIncome = (income: number): SetIncome => ({
    type: 'SET_HO_INCOME',
    payload: income
});

export const resetIncome = (): ResetIncome => ({
    type: 'RESET_HO_INCOME',
    payload: 0
});

// expense

export const setExpense = (expense: number): SetExpense => ({
    type: 'SET_HO_EXPENSE',
    payload: expense
});

export const resetExpense = (): ResetExpense => ({
    type: 'RESET_HO_EXPENSE',
    payload: 0
});

// income transaction

export const setIncomeTransaction = (
    transaction: IncomeSchema[]
): SetIncomeTransaction => ({
    type: 'SET_HO_INCOME_TRANSACTION',
    payload: transaction
});

export const resetIncomeTransaction = (): ResetIncomeTransaction => ({
    type: 'RESET_HO_INCOME_TRANSACTION',
    payload: []
});

// expense transaction

export const setExpenseTransaction = (
    transaction: ExpenseSchema[]
): SetExpenseTransaction => ({
    type: 'SET_HO_EXPENSE_TRANSACTION',
    payload: transaction
});

export const resetExpenseTransaction = (): ResetExpenseTransaction => ({
    type: 'RESET_HO_EXPENSE_TRANSACTION',
    payload: []
});

/**
 * filters
 */

// overview filter

export const setOverviewFilter = (filter: FilterType): SetOverviewFilter => ({
    type: 'SET_HO_OVERVIEW_FILTER',
    payload: filter
});

export const resetOverviewFilter = (): ResetOverviewFilter => ({
    type: 'RESET_HO_OVERVIEW_FILTER',
    payload: 'monthly'
});

// transaction filter

export const setTransactionFilter = (
    filter: TransactionFilterType
): SetTransactionFilter => ({
    type: 'SET_HO_TRANSACTION_FILTER',
    payload: filter
});

export const resetTransactionFilter = (): ResetTransactionFilter => ({
    type: 'RESET_HO_TRANSACTION_FILTER',
    payload: 'expense'
});

/**
 * error
 */

// error occurred

export const setErrorOccurred = (message: string): SetErrorOccurred => ({
    type: 'SET_HO_ERROR_OCCURRED',
    payload: message
});

export const resetErrorOccurred = (): ResetErrorOccurred => ({
    type: 'RESET_HO_ERROR_OCCURRED'
});
