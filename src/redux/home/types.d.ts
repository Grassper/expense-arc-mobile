import {Action} from 'redux';

import {ExpenseSchema, IncomeSchema} from '@/root/src/types/transaction';

export type FilterType = 'daily' | 'weekly' | 'monthly';

export type TransactionFilterType = 'income' | 'expense';

export interface InitialState {
    loading: boolean;
    errorOccurred: boolean;
    errorMessage: string;
    budget: number;
    budgetConsumed: number;
    averageConsumption: number;
    todayConsumed: number;
    overviewFilter: FilterType;
    transactionFilter: TransactionFilterType;
    income: number;
    expense: number;
    incomeTransaction: Array<IncomeSchema>;
    expenseTransaction: Array<ExpenseSchema>;
}

/**
 * Action types declaration
 */

// budget

export interface SetBudget extends Action {
    type: 'SET_HO_BUDGET';
    payload: number;
}

export interface ResetBudget extends Action {
    type: 'RESET_HO_BUDGET';
    payload: 0;
}

// budget consumed

export interface SetBudgetConsumed extends Action {
    type: 'SET_HO_BUDGET_CONSUMED';
    payload: number;
}

export interface ResetBudgetConsumed extends Action {
    type: 'RESET_HO_BUDGET_CONSUMED';
    payload: 0;
}

// average consumption

export interface SetAverageConsumption extends Action {
    type: 'SET_HO_AVERAGE_CONSUMPTION';
    payload: number;
}

export interface ResetAverageConsumption extends Action {
    type: 'RESET_HO_AVERAGE_CONSUMPTION';
    payload: 0;
}

// today consumed

export interface SetTodayConsumed extends Action {
    type: 'SET_HO_TODAY_CONSUMED';
    payload: number;
}

export interface ResetTodayConsumed extends Action {
    type: 'RESET_HO_TODAY_CONSUMED';
    payload: 0;
}

/**
 * stats
 */

// income

export interface SetIncome extends Action {
    type: 'SET_HO_INCOME';
    payload: number;
}

export interface ResetIncome extends Action {
    type: 'RESET_HO_INCOME';
    payload: 0;
}

// expense

export interface SetExpense extends Action {
    type: 'SET_HO_EXPENSE';
    payload: number;
}

export interface ResetExpense extends Action {
    type: 'RESET_HO_EXPENSE';
    payload: 0;
}

// income transaction

export interface SetIncomeTransaction extends Action {
    type: 'SET_HO_INCOME_TRANSACTION';
    payload: IncomeSchema[];
}

export interface ResetIncomeTransaction extends Action {
    type: 'RESET_HO_INCOME_TRANSACTION';
    payload: [];
}

// expense transaction

export interface SetExpenseTransaction extends Action {
    type: 'SET_HO_EXPENSE_TRANSACTION';
    payload: ExpenseSchema[];
}

export interface ResetExpenseTransaction extends Action {
    type: 'RESET_HO_EXPENSE_TRANSACTION';
    payload: [];
}

/**
 * filters
 */

// overview filter

export interface SetOverviewFilter extends Action {
    type: 'SET_HO_OVERVIEW_FILTER';
    payload: FilterType;
}

export interface ResetOverviewFilter extends Action {
    type: 'RESET_HO_OVERVIEW_FILTER';
    payload: 'monthly';
}

// transaction filter

export interface SetTransactionFilter extends Action {
    type: 'SET_HO_TRANSACTION_FILTER';
    payload: TransactionFilterType;
}

export interface ResetTransactionFilter extends Action {
    type: 'RESET_HO_TRANSACTION_FILTER';
    payload: 'expense';
}

/**
 * error
 */

// error occurred

export interface SetErrorOccurred extends Action {
    type: 'SET_HO_ERROR_OCCURRED';
    payload: string;
}

export interface ResetErrorOccurred extends Action {
    type: 'RESET_HO_ERROR_OCCURRED';
}

export type ReducerActionTypes =
    | SetBudget
    | ResetBudget
    | SetBudgetConsumed
    | ResetBudgetConsumed
    | SetAverageConsumption
    | ResetAverageConsumption
    | SetTodayConsumed
    | ResetTodayConsumed
    | SetIncome
    | ResetIncome
    | SetExpense
    | ResetExpense
    | SetIncomeTransaction
    | ResetIncomeTransaction
    | SetExpenseTransaction
    | ResetExpenseTransaction
    | SetOverviewFilter
    | ResetOverviewFilter
    | SetTransactionFilter
    | ResetTransactionFilter
    | SetErrorOccurred
    | ResetErrorOccurred;
