import {TransactionSchema} from './modelTypes';

class Transaction {
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

    constructor(obj: TransactionSchema) {
        this.id = obj.id;
        this.type = obj.type;
        this.name = obj.name;
        this.category = obj.category;
        this.description = obj.description;
        this.amount = obj.amount;
        this.date = obj.date;
        this.transferType = obj.transferType;
        this.transactionMessage = obj.transactionMessage || null;
        this.billUrl = obj.billUrl || null;
    }
}

export default Transaction;
