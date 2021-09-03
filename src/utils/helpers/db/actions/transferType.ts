import { db } from '@/root/src/utils/helpers/db/config'
import { CategoryAndTransferTypes } from './declaration'

export const addTransferType = (transferTypeObj: CategoryAndTransferTypes) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO TransferTypes(name, iconName, iconSet, iconColor,backgroundColor,createdDate,createdTime) VALUES(?, ?, ?, ?, ?,?,?);',
        [
          transferTypeObj.name,
          transferTypeObj.iconName,
          transferTypeObj.iconSet,
          transferTypeObj.iconColor,
          transferTypeObj.backgroundColor,
          transferTypeObj.createdDate,
          transferTypeObj.createdTime
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

interface UpdateTypes extends CategoryAndTransferTypes {
  id: string
}

export const updateTransferTypeById = (transferTypeObj: UpdateTypes) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE TransferTypes SET name = ?, iconName = ?, iconSet = ?, iconColor = ?, backgroundColor = ?, createdDate = ?,createdTime = ?  WHERE id = ?;',
        [
          transferTypeObj.name,
          transferTypeObj.iconName,
          transferTypeObj.iconSet,
          transferTypeObj.iconColor,
          transferTypeObj.backgroundColor,
          transferTypeObj.createdDate,
          transferTypeObj.createdTime,
          transferTypeObj.id
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

export const removeTransferTypeById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM TransferTypes WHERE id = ?;',
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

export const removeTransferTypeAll = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM TransferTypes;',
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

export const getTransferTypeById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from TransferTypes WHERE id = ?;',
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

export const getTransferTypePaginate = (limit: string, offset: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from TransferTypes limit ? offset ?;',
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
