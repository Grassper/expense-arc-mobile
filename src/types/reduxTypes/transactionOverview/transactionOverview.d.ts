import {ExpenseSchema, IncomeSchema} from '@/root/src/types/transaction';

export type GraphFilterType = 'daily' | 'weekly' | 'monthly';

export type TransactionFilterType = 'income' | 'expense';

interface CandlePercents {
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
    graphFilter: GraphFilterType;
    transactionFilter: TransactionFilterType;
    errorOccurred: boolean;
    errorMessage: string;
}
