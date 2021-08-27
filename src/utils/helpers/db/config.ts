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

export const config = {
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
};
