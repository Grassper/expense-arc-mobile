import {
  addTransferType,
  getTransferTypePaginate
} from '@/root/src/utils/helpers/db/actions'
import { setTransferTypes } from './action'
import { StoreType } from '@/root/src/redux/types'
import { SetTransferTypes } from './types'
import { ThunkAction } from 'redux-thunk'

interface TransferTypes {
  name: string
  iconName: string
  iconSet: string
  iconColor: string
  backgroundColor: string
  createdDate: string
  createdTime: string
}

type AddTransferTypesAsync = (
  transferTypes: TransferTypes
) => ThunkAction<void, StoreType, {}, SetTransferTypes>

export const addTransferTypesAsync: AddTransferTypesAsync = (
  transferTypes: TransferTypes
) => async dispatch => {
  try {
    await addTransferType(transferTypes)
    const obj = await getTransferTypePaginate('10', '0')
    dispatch(setTransferTypes(obj.rows._array))
  } catch (err) {
    console.log(err)
  }
}

type getTransferTypesAsync = (
  limit: string,
  offset: string
) => ThunkAction<void, StoreType, {}, SetTransferTypes>

export const getTransferTypesAsync: getTransferTypesAsync = (
  limit,
  offset
) => async dispatch => {
  try {
    const obj = await getTransferTypePaginate(limit, offset)
    dispatch(setTransferTypes(obj.rows._array))
  } catch (err) {
    console.log(err)
  }
}
