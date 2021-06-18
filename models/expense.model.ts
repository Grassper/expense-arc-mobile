import {ExpenseSchema} from './modelTypes';
import Transaction from './transaction.model';

class Expense extends Transaction {
    trackAsExpense: boolean;

    constructor(obj: ExpenseSchema) {
        super(obj);
        this.trackAsExpense = obj.trackAsExpense;
    }
}

export default Expense;
