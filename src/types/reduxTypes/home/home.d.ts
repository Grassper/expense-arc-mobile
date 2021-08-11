import {ExpenseSchema, IncomeSchema} from '@/root/src/types/transaction';

export interface HomeType {
    loading: boolean;
    errorOccurred: boolean;
    errorMessage: string;
    budget: number;
    budgetConsumed: number;
    averageConsumption: number;
    todayConsumed: number;
    overviewFilter: string;
    transactionFilter: string;
    income: number;
    expense: number;
    incomeTransaction: Array<IncomeSchema>;
    expenseTransaction: Array<ExpenseSchema>;
}

export interface HomeActionType<Payload> {
    type: string;
    payload: Payload;
}
