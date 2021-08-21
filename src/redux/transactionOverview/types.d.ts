import {Action} from 'redux';

import {ExpenseSchema, IncomeSchema} from '@/root/src/types/transaction';

export type GraphFilterType = 'daily' | 'weekly' | 'monthly';

export type TransactionFilterType = 'income' | 'expense';

export interface CandlePercents {
    _id: string;
    statsFilter: GraphFilterType;
    name: string;
    income: number;
    expense: number;
    incomeTransaction: Array<IncomeSchema>;
    expenseTransaction: Array<ExpenseSchema>;
    transactionType: 'Expense' | 'Income';
}

export interface TransactionOverviewType {
    loading: boolean;
    candlePercents: CandlePercents[];
    income: number;
    expense: number;
    incomeTransaction: Array<IncomeSchema>;
    expenseTransaction: Array<ExpenseSchema>;
    graphFilter: GraphFilterType;
    transactionFilter: TransactionFilterType;
    errorOccurred: boolean;
    errorMessage: string;
}

/**
 * stats
 */

// candle percent array

export interface SetCandlePercentArray extends Action {
    type: 'SET_TR_CANDLE_PERCENT_ARRAY';
    payload: CandlePercents[];
}

export interface ResetCandlePercentArray extends Action {
    type: 'RESET_TR_CANDLE_PERCENT_ARRAY';
    payload: [];
}

// income

export interface SetIncome extends Action {
    type: 'SET_TR_INCOME';
    payload: number;
}

export interface ResetIncome extends Action {
    type: 'RESET_TR_INCOME';
    payload: 0;
}

// expense

export interface SetExpense extends Action {
    type: 'SET_TR_EXPENSE';
    payload: number;
}

export interface ResetExpense extends Action {
    type: 'RESET_TR_EXPENSE';
    payload: 0;
}

// income transaction

export interface SetIncomeTransaction extends Action {
    type: 'SET_TR_INCOME_TRANSACTION';
    payload: IncomeSchema[];
}

export interface ResetIncomeTransaction extends Action {
    type: 'RESET_TR_INCOME_TRANSACTION';
    payload: [];
}

// expense transaction

export interface SetExpenseTransaction extends Action {
    type: 'SET_TR_EXPENSE_TRANSACTION';
    payload: ExpenseSchema[];
}

export interface ResetExpenseTransaction extends Action {
    type: 'RESET_TR_EXPENSE_TRANSACTION';
    payload: [];
}

/**
 * filters
 */

// Graph filter

export interface SetGraphFilter extends Action {
    type: 'SET_TR_GRAPH_FILTER';
    payload: GraphFilterType;
}

export interface ResetGraphFilter extends Action {
    type: 'RESET_TR_GRAPH_FILTER';
    payload: 'monthly';
}

// transaction filter

export interface SetTransactionFilter extends Action {
    type: 'SET_TR_TRANSACTION_FILTER';
    payload: TransactionFilterType;
}

export interface ResetTransactionFilter extends Action {
    type: 'RESET_TR_TRANSACTION_FILTER';
    payload: 'expense';
}

/**
 * error
 */

// error occurred
export interface SetErrorOccurred extends Action {
    type: 'SET_TR_ERROR_OCCURRED';
    payload: string;
}

export interface ResetErrorOccurred extends Action {
    type: 'RESET_TR_ERROR_OCCURRED';
}

export type ReducerActionTypes =
    | SetCandlePercentArray
    | ResetCandlePercentArray
    | SetIncome
    | ResetIncome
    | SetExpense
    | ResetExpense
    | SetIncomeTransaction
    | ResetIncomeTransaction
    | SetExpenseTransaction
    | ResetExpenseTransaction
    | SetGraphFilter
    | ResetGraphFilter
    | SetTransactionFilter
    | ResetTransactionFilter
    | SetErrorOccurred
    | ResetErrorOccurred;
