import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase('expensearc.db')

export const initDb = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Transactions(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            name TEXT NOT NULL,
            category INTEGER NOT NULL,
            description TEXT NOT NULL,
            amount REAL NOT NULL,
            createdDate TEXT NOT NULL,
            createdTime TEXT NOT NULL,
            transferType INTEGER NOT NULL,
            transactionMessage TEXT NOT NULL,
            billUrl TEXT NOT NULL,
            FOREIGN KEY(category) REFERENCES Categories(id),
            FOREIGN KEY(transferType) REFERENCES TransferTypes(id)
          );
          CREATE TABLE IF NOT EXISTS Categories(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            iconName TEXT NOT NULL,
            iconSet TEXT NOT NULL,
            iconColor TEXT NOT NULL,
            backgroundColor TEXT NOT NULL,
            createdDate TEXT NOT NULL,
            createdTime TEXT NOT NULL
          );
          CREATE TABLE IF NOT EXISTS TransferTypes(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            iconName TEXT NOT NULL,
            iconSet TEXT NOT NULL,
            iconColor TEXT NOT NULL,
            backgroundColor TEXT NOT NULL,
            createdDate TEXT NOT NULL,
            createdTime TEXT NOT NULL
          );
          CREATE TABLE IF NOT EXISTS MonthlyStats(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            income REAL NOT NULL,
            expense REAL NOT NULL
          );
          CREATE TABLE IF NOT EXISTS WeeklyStats(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            income REAL NOT NULL,
            expense REAL NOT NULL
          );
          CREATE TABLE IF NOT EXISTS DailyStats(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            income REAL NOT NULL,
            expense REAL NOT NULL
          );`,
        [],
        () => {
          resolve('db created')
        },
        (_, err) => {
          reject(err)
          return false
        }
      )
    })
  })
  return promise
}
