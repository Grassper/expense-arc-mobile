export interface TransactionSchema {
    id: string;
    type: string;
    name: string;
    category: string;
    description: string;
    amount: number;
    date: string;
    transferType: string;
    transactionMessage: string | null;
    billUrl: string | null;
}

export interface IncomeSchema extends TransactionSchema {
    trackAsIncome: boolean;
}

export interface ExpenseSchema extends TransactionSchema {
    trackAsExpense: boolean;
}
