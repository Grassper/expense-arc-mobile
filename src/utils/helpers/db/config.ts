import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase('expensearc.db')

const createDbPromise = new Promise((resolve, reject) => {
  db.transaction(
    tx => {
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
        `
      )
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Categories(
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          iconName TEXT NOT NULL,
          iconSet TEXT NOT NULL,
          iconColor TEXT NOT NULL,
          backgroundColor TEXT NOT NULL,
          createdDate TEXT NOT NULL,
          createdTime TEXT NOT NULL
        );
        `
      )
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS TransferTypes(
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          iconName TEXT NOT NULL,
          iconSet TEXT NOT NULL,
          iconColor TEXT NOT NULL,
          backgroundColor TEXT NOT NULL,
          createdDate TEXT NOT NULL,
          createdTime TEXT NOT NULL
        );
        `
      )
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS MonthlyStats(
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          income REAL NOT NULL,
          expense REAL NOT NULL
        );
      `
      )
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS WeeklyStats(
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          income REAL NOT NULL,
          expense REAL NOT NULL
        );
      `
      )
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS DailyStats(
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          income REAL NOT NULL,
          expense REAL NOT NULL
        );`
      )
    },
    (err) => reject(err),
    () => resolve("db created")
  )
})

const createdTransactionOccurTrigger = new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      `
      CREATE TRIGGER IF NOT EXISTS on_transaction_occurs AFTER INSERT ON Transactions BEGIN INSERT
      OR IGNORE INTO DailyStats (name, income, expense)
      VALUES
        (NEW.createdDate, 0, 0);
      INSERT
      OR IGNORE INTO WeeklyStats (name, income, expense)
      VALUES
        (
          date(NEW.createdDate, 'weekday 0', '-6 days') || '/' || date(NEW.createdDate, 'weekday 0'),
          0,
          0
        );
      INSERT
      OR IGNORE INTO MonthlyStats (name, income, expense)
      VALUES
        (
          date(NEW.createdDate, 'start of month') || '/' || date(
            NEW.createdDate,
            'start of month',
            '+1 month',
            '-1 day'
          ),
          0,
          0
        );
      UPDATE
        DailyStats
      SET
        income = CASE
          WHEN NEW.type == 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = NEW.createdDate;
      UPDATE
        WeeklyStats
      SET
        income = CASE
          WHEN NEW.type == 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = date(NEW.createdDate, 'weekday 0', '-6 days') || '/' || date(NEW.createdDate, 'weekday 0');
      UPDATE
        MonthlyStats
      SET
        income = CASE
          WHEN NEW.type == 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = date(NEW.createdDate, 'start of month') || '/' || date(
          NEW.createdDate,
          'start of month',
          '+1 month',
          '-1 day'
        );
      END;
      `,
      [],
      () => {
        console.log('%con transaction occur trigger created', 'color:green')
        resolve('on transaction occur trigger created')
      },
      (_, err) => {
        reject(err)
        return false
      }
    )
  })
})

const createdTransactionUpdateTrigger = new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      `
      CREATE TRIGGER IF NOT EXISTS on_transaction_update AFTER
      UPDATE
        ON Transactions BEGIN
        INSERT
        OR IGNORE INTO DailyStats (name, income, expense)
      VALUES
        (NEW.createdDate, 0, 0);
      UPDATE
        DailyStats
      SET
        income = CASE
          WHEN OLD.type == 'income'
          AND NEW.type = 'income' THEN income - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense'
          AND NEW.type = 'expense' THEN expense - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate == NEW.createdDate THEN OLD.createdDate
          ELSE NULL
        END;
      UPDATE
        DailyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income - OLD.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN OLD.createdDate
          ELSE NULL
        END;
      UPDATE
        DailyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN NEW.createdDate
          ELSE NULL
        END;
      INSERT
      OR IGNORE INTO WeeklyStats (name, income, expense)
      VALUES
        (
          date(NEW.createdDate, 'weekday 0', '-6 days') || '/' || date(NEW.createdDate, 'weekday 0'),
          0,
          0
        );
      UPDATE
        WeeklyStats
      SET
        income = CASE
          WHEN OLD.type == 'income'
          AND NEW.type = 'income' THEN income - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense'
          AND NEW.type = 'expense' THEN expense - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate == NEW.createdDate THEN date(OLD.createdDate, 'weekday 0', '-6 days') || '/' || date(OLD.createdDate, 'weekday 0')
          ELSE NULL
        END;
      UPDATE
        WeeklyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income - OLD.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN date(OLD.createdDate, 'weekday 0', '-6 days') || '/' || date(OLD.createdDate, 'weekday 0')
          ELSE NULL
        END;
      UPDATE
        WeeklyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN date(NEW.createdDate, 'weekday 0', '-6 days') || '/' || date(NEW.createdDate, 'weekday 0')
          ELSE NULL
        END;
      INSERT
      OR IGNORE INTO MonthlyStats (name, income, expense)
      VALUES
        (
          date(NEW.createdDate, 'start of month') || '/' || date(
            NEW.createdDate,
            'start of month',
            '+1 month',
            '-1 day'
          ),
          0,
          0
        );
      UPDATE
        MonthlyStats
      SET
        income = CASE
          WHEN OLD.type == 'income'
          AND NEW.type = 'income' THEN income - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense'
          AND NEW.type = 'expense' THEN expense - OLD.amount + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate == NEW.createdDate THEN date(OLD.createdDate, 'start of month') || '/' || date(
            OLD.createdDate,
            'start of month',
            '+1 month',
            '-1 day'
          )
          ELSE NULL
        END;
      UPDATE
        MonthlyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income - OLD.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense - OLD.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN date(OLD.createdDate, 'start of month') || '/' || date(
            OLD.createdDate,
            'start of month',
            '+1 month',
            '-1 day'
          )
          ELSE NULL
        END;
      UPDATE
        MonthlyStats
      SET
        income = CASE
          WHEN NEW.type == 'income'
          AND OLD.type = 'income' THEN income + NEW.amount
          WHEN OLD.type == 'expense'
          AND NEW.type = 'income' THEN income + NEW.amount
          ELSE income
        END,
        expense = CASE
          WHEN NEW.type == 'expense'
          AND OLD.type = 'expense' THEN expense + NEW.amount
          WHEN OLD.type == 'income'
          AND NEW.type = 'expense' THEN expense + NEW.amount
          ELSE expense
        END
      WHERE
        name = CASE
          WHEN OLD.createdDate != NEW.createdDate THEN date(NEW.createdDate, 'start of month') || '/' || date(
            NEW.createdDate,
            'start of month',
            '+1 month',
            '-1 day'
          )
          ELSE NULL
        END;
      END;
      `,
      [],
      () => {
        console.log('%con transaction update trigger created', 'color:green')
        resolve('on transaction update trigger created')
      },
      (_, err) => {
        reject(err)
        return false
      }
    )
  })
})

const createdTransactionDeleteTrigger = new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      `
      CREATE TRIGGER IF NOT EXISTS on_transaction_delete AFTER DELETE ON Transactions BEGIN
      UPDATE
        DailyStats
      SET
        income = CASE
          WHEN OLD.type == 'income' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = OLD.createdDate;
      UPDATE
        WeeklyStats
      SET
        income = CASE
          WHEN OLD.type == 'income' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = date(OLD.createdDate, 'weekday 0', '-6 days') || '/' || date(OLD.createdDate, 'weekday 0');
      UPDATE
        MonthlyStats
      SET
        income = CASE
          WHEN OLD.type == 'income' THEN income - OLD.amount
          ELSE income
        END,
        expense = CASE
          WHEN OLD.type == 'expense' THEN expense - OLD.amount
          ELSE expense
        END
      WHERE
        name = date(OLD.createdDate, 'start of month') || '/' || date(
          OLD.createdDate,
          'start of month',
          '+1 month',
          '-1 day'
        );
      END;
      `,
      [],
      () => {
        console.log('%con transaction delete trigger created', 'color:green')
        resolve('on transaction delete trigger created')
      },
      (_, err) => {
        reject(err)
        return false
      }
    )
  })
})

export const initDb = () => {
  return Promise.all([
    createDbPromise,
    createdTransactionOccurTrigger,
    createdTransactionUpdateTrigger,
    createdTransactionDeleteTrigger
  ])
}
