import {IncomeSchema} from './modelTypes';
import Transaction from './transaction.model';

class Income extends Transaction {
    trackAsIncome: boolean;

    constructor(obj: IncomeSchema) {
        super(obj);
        this.trackAsIncome = obj.trackAsIncome;
    }
}

export default Income;
