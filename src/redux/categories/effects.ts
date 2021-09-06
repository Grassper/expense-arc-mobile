import {
  addCategory,
  getCategoryPaginate
} from '@/root/src/utils/helpers/db/actions'
import { setCategories } from './action'
import { StoreType } from '@/root/src/redux/types'
import { SetCategories } from './types'
import { ThunkAction } from 'redux-thunk'

interface CategoryTypes {
  name: string
  iconName: string
  iconSet: string
  iconColor: string
  backgroundColor: string
  createdDate: string
  createdTime: string
}

type AddCategoryAsync = (
  category: CategoryTypes
) => ThunkAction<void, StoreType, {}, SetCategories>

export const addCategoryAsync: AddCategoryAsync = (
  category: CategoryTypes
) => async dispatch => {
  try {
    await addCategory(category)
    const obj = await getCategoryPaginate('10', '0')
    dispatch(setCategories(obj.rows._array))
  } catch (err) {
    console.log(err)
  }
}

type getCategoryAsync = (limit:string, offset:string) => ThunkAction<void, StoreType, {}, SetCategories>

export const getCategoryAsync:getCategoryAsync = (limit, offset) => async dispatch => {
  try {
    const obj = await getCategoryPaginate(limit, offset)
    dispatch(setCategories(obj.rows._array))
  } catch (err) {
    console.log(err)
  }
}
