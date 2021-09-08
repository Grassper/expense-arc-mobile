interface CommonTypes {
    _id: string;
    name: string;
}

export interface TransactionSchema {
    id: string;
    type: 'income' | 'expense';
    name: string;
    category: CommonTypes;
    description: string;
    amount: number;
    date: string;
    transferType: CommonTypes;
    transactionMessage: string;
    billUrl: string;
}