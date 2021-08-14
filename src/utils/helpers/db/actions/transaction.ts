import Realm from 'realm';

import {OpenDb} from '../config';

const {UUID} = Realm.BSON;

interface TransactionTypes {
    type: string;
    name: string;
    categoryId: string;
    description: string;
    amount: number;
    date: Date;
    transferTypeId: string;
    transactionMessage: string;
    billUrl: string;
    trackAsIncome?: boolean;
    trackAsExpense?: boolean;
}

export const addTransaction = async (
    transaction: TransactionTypes
): Promise<void> => {
    try {
        const realm = await OpenDb();

        const pickSchema =
            transaction.type.toLowerCase() === 'expense' ? 'Expense' : 'Income';

        const trackAs =
            transaction.type.toLowerCase() === 'expense'
                ? {trackAsExpense: transaction.trackAsExpense}
                : {trackAsIncome: transaction.trackAsIncome};

        realm.write(() => {
            realm.create(pickSchema, {
                _id: new UUID(),
                type: transaction.type,
                name: transaction.name,
                category: {
                    _id: transaction.categoryId
                },
                description: transaction.description,
                amount: transaction.amount,
                date: transaction.date,
                transferType: {
                    _id: transaction.transferTypeId
                },
                transactionMessage: transaction.transactionMessage,
                billUrl: transaction.billUrl,
                ...trackAs
            });
        });

        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const updateTransaction = async (): Promise<void> => {};

export const removeTransaction = async (
    id: string,
    type: string
): Promise<void> => {
    try {
        const realm = await OpenDb();

        const pickSchema =
            type.toLowerCase() === 'expense' ? 'Expense' : 'Income';

        realm.write(() => {
            const obj = realm.objectForPrimaryKey(pickSchema, id);
            realm.delete(obj);
        });

        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const removeTransactionAll = async (type: string): Promise<void> => {
    try {
        const realm = await OpenDb();

        const pickSchema =
            type.toLowerCase() === 'expense' ? 'Expense' : 'Income';

        realm.write(() => {
            const obj = realm.objects(pickSchema);
            realm.delete(obj);
        });

        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getTransaction = async (
    id: string,
    type: string
): Promise<void> => {
    try {
        const realm = await OpenDb();

        const pickSchema =
            type.toLowerCase() === 'expense' ? 'Expense' : 'Income';

        realm.write(() => {
            const obj = realm.objectForPrimaryKey(pickSchema, id);
            console.log(obj);
        });

        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getTransactionAll = async (type: string): Promise<void> => {
    try {
        const realm = await OpenDb();

        const pickSchema =
            type.toLowerCase() === 'expense' ? 'Expense' : 'Income';

        realm.write(() => {
            const obj = realm.objects(pickSchema);
            console.log(obj);
        });

        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};
