import { db } from '@/root/src/utils/helpers/db/config'

interface TransactionTypes {
  type: string
  name: string
  categoryId: string
  description: string
  amount: number
  createdDate: string
  createdTime: string
  transferTypeId: string
  transactionMessage: string
  billUrl: string
}

export const addTransaction = async (transactionObj: TransactionTypes) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `
        INSERT INTO
            Transactions(
            type,
            name,
            category,
            description,
            amount,
            createdDate,
            createdTime,
            transferType,
            transactionMessage,
            billUrl
            )
         VALUES
         (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
         );
        `,
        [
          transactionObj.type,
          transactionObj.name,
          transactionObj.categoryId,
          transactionObj.description,
          transactionObj.amount,
          transactionObj.createdDate,
          transactionObj.createdTime,
          transactionObj.transferTypeId,
          transactionObj.transactionMessage,
          transactionObj.billUrl
        ],
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

interface UpdateTypes extends TransactionTypes {
  id: string
}

export const updateTransactionById = (transactionObj: UpdateTypes) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `
        UPDATE
            Transactions
        SET
            type = ?,
            name = ?,
            category = ?,
            description = ?,
            amount = ?,
            createdDate = ?,
            createdTime = ?,
            transferType = ?,
            transactionMessage = ?,
            billUrl = ?
        WHERE
            id = ?;
        `,
        [
          transactionObj.type,
          transactionObj.name,
          transactionObj.categoryId,
          transactionObj.description,
          transactionObj.amount,
          transactionObj.createdDate,
          transactionObj.createdTime,
          transactionObj.transferTypeId,
          transactionObj.transactionMessage,
          transactionObj.billUrl,
          transactionObj.id
        ],
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

export const removeTransactionById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Transactions WHERE id = ?;',
        [id],
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

export const removeTransactionAll = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Transactions;',
        [],
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

export const getTransactionById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from Transactions WHERE id = ?;',
        [id],
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

export const getTransactionPaginate = (limit: string, offset: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from Transactions limit ? offset ?;',
        [limit, offset],
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
