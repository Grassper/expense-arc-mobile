import Expense from '@/root/src/models/expense.model';
import Income from '@/root/src/models/income.model';

export interface Overview {
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
    incomeTransaction: Array<Income>;
    expenseTransaction: Array<Expense>;
}

export interface Action<Payload> {
    type: string;
    payload: Payload;
}
