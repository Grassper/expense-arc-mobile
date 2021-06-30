import Expense from '../../models/expense.model';
import Income from '../../models/income.model';

export interface Overview {
    loading: boolean;
    errorOccured: boolean;
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
