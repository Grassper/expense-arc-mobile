const Transaction = {
    _id: 'uuid',
    type: 'string',
    name: 'string',
    category: 'Category',
    description: 'string',
    amount: 'int',
    date: 'date',
    transferType: 'TransferType',
    transactionMessage: 'string',
    billUrl: 'string'
};

export const Income = {
    name: 'Income',
    primaryKey: '_id',
    properties: {
        ...Transaction,
        trackAsIncome: 'bool'
    }
};

export const Expense = {
    name: 'Expense',
    primaryKey: '_id',
    properties: {
        ...Transaction,
        trackAsExpense: 'bool'
    }
};

const CategoryAndTransferType = {
    _id: 'uuid',
    name: 'string',
    iconName: 'string',
    iconSet: 'string',
    iconColor: 'string',
    backgroundColor: 'string',
    incomeTransaction: 'Income[]',
    expenseTransaction: 'Expense[]'
};

export const Category = {
    name: 'Category',
    primaryKey: '_id',
    properties: {
        ...CategoryAndTransferType
    }
};

export const TransferType = {
    name: 'TransferType',
    primaryKey: '_id',
    properties: {
        ...CategoryAndTransferType
    }
};

const Stats = {
    _id: 'uuid',
    name: 'string',
    income: 'int',
    expense: 'int',
    incomeTransaction: 'Income[]',
    expenseTransaction: 'Expense[]'
};

export const MonthlyStats = {
    name: 'Monthly',
    primaryKey: '_id',
    properties: Stats
};

export const WeeklyStats = {
    name: 'Weekly',
    primaryKey: '_id',
    properties: Stats
};

export const DailyStats = {
    name: 'Daily',
    primaryKey: '_id',
    properties: Stats
};
