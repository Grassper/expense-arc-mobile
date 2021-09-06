import { db } from '@/root/src/utils/helpers/db/config'
import { CategoryAndTransferTypes } from './declaration'
import { SQLResultSet } from 'expo-sqlite'

export const addCategory = (categoryObj: CategoryAndTransferTypes) => {
  const promise = new Promise<SQLResultSet>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Categories(name, iconName, iconSet, iconColor,backgroundColor,createdDate,createdTime) VALUES(?, ?, ?, ?, ?,?,?);',
        [
          categoryObj.name,
          categoryObj.iconName,
          categoryObj.iconSet,
          categoryObj.iconColor,
          categoryObj.backgroundColor,
          categoryObj.createdDate,
          categoryObj.createdTime
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

export const updateCategoryById = (categoryObj: UpdateTypes) => {
  const promise = new Promise<SQLResultSet>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Categories SET name = ?, iconName = ?, iconSet = ?, iconColor = ?, backgroundColor = ?, createdDate = ?,createdTime = ?  WHERE id = ?;',
        [
          categoryObj.name,
          categoryObj.iconName,
          categoryObj.iconSet,
          categoryObj.iconColor,
          categoryObj.backgroundColor,
          categoryObj.createdDate,
          categoryObj.createdTime,
          categoryObj.id
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

export const removeCategoryById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Categories WHERE id = ?;',
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

export const removeCategoryAll = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Categories;',
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

export const getCategoryById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from Categories WHERE id = ?;',
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

export const getCategoryPaginate = (limit: string, offset: string) => {
  const promise = new Promise<SQLResultSet>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'select * from Categories limit ? offset ?;',
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
