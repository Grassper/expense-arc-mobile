import {TransactionSchema} from '@/root/src/types/transaction';

import {
    CandlePercents,
    GraphFilterType,
    ResetCandlePercentArray,
    ResetErrorOccurred,
    ResetExpense,
    ResetExpenseTransaction,
    ResetGraphFilter,
    ResetIncome,
    ResetIncomeTransaction,
    ResetTransactionFilter,
    SetCandlePercentArray,
    SetErrorOccurred,
    SetExpense,
    SetExpenseTransaction,
    SetGraphFilter,
    SetIncome,
    SetIncomeTransaction,
    SetTransactionFilter,
    TransactionFilterType
} from './types';

export const ActionReduxTypes = {
    SET_TR_GRAPH_FILTER: 'SET_TR_GRAPH_FILTER',
    RESET_TR_GRAPH_FILTER: 'RESET_TR_GRAPH_FILTER',
    SET_TR_TRANSACTION_FILTER: 'SET_TR_TRANSACTION_FILTER',
    RESET_TR_TRANSACTION_FILTER: 'RESET_TR_TRANSACTION_FILTER',
    SET_TR_ERROR_OCCURRED: 'SET_TR_ERROR_OCCURRED',
    RESET_TR_ERROR_OCCURRED: 'RESET_TR_ERROR_OCCURRED',
    SET_TR_INCOME: 'SET_TR_INCOME',
    RESET_TR_INCOME: 'RESET_TR_INCOME',
    SET_TR_EXPENSE: 'SET_TR_EXPENSE',
    RESET_TR_EXPENSE: 'RESET_TR_EXPENSE',
    SET_TR_INCOME_TRANSACTION: 'SET_TR_INCOME_TRANSACTION',
    RESET_TR_INCOME_TRANSACTION: 'RESET_TR_INCOME_TRANSACTION',
    SET_TR_EXPENSE_TRANSACTION: 'SET_TR_EXPENSE_TRANSACTION',
    RESET_TR_EXPENSE_TRANSACTION: 'RESET_TR_EXPENSE_TRANSACTION'
};

/**
 * stats
 */

// candle percent array

export const setCandlePercentArray = (
    candles: CandlePercents[]
): SetCandlePercentArray => ({
    type: 'SET_TR_CANDLE_PERCENT_ARRAY',
    payload: candles
});

export const resetCandlePercentArray = (): ResetCandlePercentArray => ({
    type: 'RESET_TR_CANDLE_PERCENT_ARRAY',
    payload: []
});

// income

export const setIncome = (income: number): SetIncome => ({
    type: 'SET_TR_INCOME',
    payload: income
});

export const resetIncome = (): ResetIncome => ({
    type: 'RESET_TR_INCOME',
    payload: 0
});

// expense

export const setExpense = (expense: number): SetExpense => ({
    type: 'SET_TR_EXPENSE',
    payload: expense
});

export const resetExpense = (): ResetExpense => ({
    type: 'RESET_TR_EXPENSE',
    payload: 0
});

// income transaction

export const setIncomeTransaction = (
    transaction: TransactionSchema[]
): SetIncomeTransaction => ({
    type: 'SET_TR_INCOME_TRANSACTION',
    payload: transaction
});

export const resetIncomeTransaction = (): ResetIncomeTransaction => ({
    type: 'RESET_TR_INCOME_TRANSACTION',
    payload: []
});

// expense transaction

export const setExpenseTransaction = (
    transaction: TransactionSchema[]
): SetExpenseTransaction => ({
    type: 'SET_TR_EXPENSE_TRANSACTION',
    payload: transaction
});

export const resetExpenseTransaction = (): ResetExpenseTransaction => ({
    type: 'RESET_TR_EXPENSE_TRANSACTION',
    payload: []
});

/**
 * filters
 */

// Graph filter

export const setGraphFilter = (filter: GraphFilterType): SetGraphFilter => ({
    type: 'SET_TR_GRAPH_FILTER',
    payload: filter
});

export const resetGraphFilter = (): ResetGraphFilter => ({
    type: 'RESET_TR_GRAPH_FILTER',
    payload: 'monthly'
});

// transaction filter

export const setTransactionFilter = (
    filter: TransactionFilterType
): SetTransactionFilter => ({
    type: 'SET_TR_TRANSACTION_FILTER',
    payload: filter
});

export const resetTransactionFilter = (): ResetTransactionFilter => ({
    type: 'RESET_TR_TRANSACTION_FILTER',
    payload: 'expense'
});

/**
 * error
 */

// error occurred

export const setErrorOccurred = (message: string): SetErrorOccurred => ({
    type: 'SET_TR_ERROR_OCCURRED',
    payload: message
});

export const resetErrorOccurred = (): ResetErrorOccurred => ({
    type: 'RESET_TR_ERROR_OCCURRED'
});
