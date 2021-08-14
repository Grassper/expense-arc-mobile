import Realm from 'realm';

import {
    Category,
    DailyStats,
    Expense,
    Income,
    MonthlyStats,
    TransferType,
    WeeklyStats
} from './schema';

export const OpenDb = async (): Promise<Realm> => {
    const realm = await Realm.open({
        path: 'ExpenseArc.realm',
        schema: [
            Category,
            DailyStats,
            Expense,
            Income,
            MonthlyStats,
            TransferType,
            WeeklyStats
        ],
        schemaVersion: 0
    });
    return realm;
};
