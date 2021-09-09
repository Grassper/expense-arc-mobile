import { InitialState, ReducerActionTypes } from './types'
import { ActionReduxTypes } from './action'

const initialState = {
  loading: false,
  transferTypes: []
}

export const transferTypes = (
  state: InitialState = initialState,
  action: ReducerActionTypes
): InitialState => {
  switch (action.type) {
    case ActionReduxTypes.SET_TT_TRANSFER_TYPE:
      return {
        ...state,
        transferTypes: action.payload
      }
    case ActionReduxTypes.RESET_TT_TRANSFER_TYPE:
      return {
        ...state,
        transferTypes: action.payload
      }
    default:
      return state
  }
}
