import { ThunkAction } from 'redux-thunk'
import { StoreType } from '@/root/src/redux/types'
import { startOfMonth, endOfMonth } from 'date-fns'
import { db } from '@/root/src/utils/helpers/db/config'

import {
  setBudgetConsumed,
  setTodayConsumed,
  setAverageConsumption,
  setIncome,
  setExpense,
  setIncomeTransaction,
  setExpenseTransaction
} from '@/root/src/redux/home/action'
import { ReducerActionTypes } from '@/root/src/redux/home/types'

import {
  getTransactionPaginate,
  getCategoryById,
  getTransferTypeById
} from '@/root/src/utils/helpers/db/actions'

type SeedHomeAsync = () => ThunkAction<void, StoreType, {}, ReducerActionTypes>

const formatDate = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')}`
}

const getMonthlyConsumption = (name: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from MonthlyStats WHERE name = ? limit 1;`,
        [name],
        (_, result) => {
          resolve(result)
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

const getTodayConsumption = (name: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from DailyStats WHERE name = ? limit 1;`,
        [name],
        (_, result) => {
          resolve(result)
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

const getAverageConsumption = (startDate: string, endDate: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM DailyStats WHERE name BETWEEN ? AND ?;`,
        [startDate, endDate],
        (_, result) => {
          resolve(result)
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

export const seedHomeAsync: SeedHomeAsync = () => async dispatch => {
  try {
    const date = new Date()
    const query = `${formatDate(startOfMonth(new Date()))}/${formatDate(
      endOfMonth(date)
    )}`
    const consumedBudgetObj = await getMonthlyConsumption(query)
    const consumedTodayObj = await getTodayConsumption(formatDate(new Date()))
    const dailyConsumptionForMonth = await getAverageConsumption(
      formatDate(startOfMonth(new Date())),
      formatDate(endOfMonth(date))
    )
    const incomeTransactionobj = await getTransactionPaginate(
      'income',
      '10',
      '0'
    )
    const expenseTransactionobj = await getTransactionPaginate(
      'expense',
      '10',
      '0'
    )

    const incomeMapPromise = incomeTransactionobj.rows._array.map(
      async entry => {
        const categoryObj = await getCategoryById(entry.category)
        const transferTypeObj = await getTransferTypeById(entry.transferType)
        return {
          ...entry,
          category: categoryObj.rows._array[0],
          transferType: transferTypeObj.rows._array[0]
        }
      }
    )

    const expenseMapPromise = expenseTransactionobj.rows._array.map(
      async entry => {
        const categoryObj = await getCategoryById(entry.category)
        const transferTypeObj = await getTransferTypeById(entry.transferType)
        return {
          ...entry,
          category: categoryObj.rows._array[0],
          transferType: transferTypeObj.rows._array[0]
        }
      }
    )

    const incomeTransactionMap = await Promise.all(incomeMapPromise)
    const expenseTransactionMap = await Promise.all(expenseMapPromise)
    dispatch(setIncomeTransaction(incomeTransactionMap || []))
    dispatch(setExpenseTransaction(expenseTransactionMap || []))

    const averageConsumptionPerDay =
      consumedBudgetObj.rows.length !== 0
        ? dailyConsumptionForMonth.rows._array.reduce(
            (previousValue, currentEntry) => {
              return previousValue + currentEntry.expense
            },
            0
          ) / consumedBudgetObj.rows.length
        : 0

    if (consumedBudgetObj.rows.length !== 0) {
      dispatch(setBudgetConsumed(consumedBudgetObj.rows._array[0].expense))
      dispatch(setExpense(consumedBudgetObj.rows._array[0].expense))
      dispatch(setIncome(consumedBudgetObj.rows._array[0].income))
    }
    if (consumedTodayObj.rows.length !== 0) {
      dispatch(setTodayConsumed(consumedTodayObj.rows._array[0].expense))
    }
    dispatch(setAverageConsumption(averageConsumptionPerDay))
  } catch (err) {
    console.log(err)
  }
}
