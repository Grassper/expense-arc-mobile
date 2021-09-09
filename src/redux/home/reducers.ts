import {
  FilterType,
  InitialState,
  ReducerActionTypes,
  TransactionFilterType
} from './types'

import { ActionReduxTypes } from './action'

const error = {
  errorOccurred: false,
  errorMessage: ''
}

const filters = {
  overviewFilter: 'monthly' as FilterType,
  transactionFilter: 'expense' as TransactionFilterType
}

const stats = {
  income: 0,
  expense: 0,
  incomeTransaction: [],
  expenseTransaction: []
}

const dashboard = {
  budget: 0,
  budgetConsumed: 0,
  averageConsumption: 0,
  todayConsumed: 0
}

const initialState = {
  loading: false,
  ...dashboard,
  ...stats,
  ...filters,
  ...error
}

export const home = (
  state: InitialState = initialState,
  action: ReducerActionTypes
): InitialState => {
  switch (action.type) {
    case ActionReduxTypes.SET_HO_BUDGET:
    case ActionReduxTypes.RESET_HO_BUDGET:
      return {
        ...state,
        budget: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_BUDGET_CONSUMED:
    case ActionReduxTypes.RESET_HO_BUDGET_CONSUMED:
      return {
        ...state,
        budgetConsumed: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_TODAY_CONSUMED:
    case ActionReduxTypes.RESET_HO_TODAY_CONSUMED:
      return {
        ...state,
        todayConsumed: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_AVERAGE_CONSUMPTION:
    case ActionReduxTypes.RESET_HO_AVERAGE_CONSUMPTION:
      return {
        ...state,
        averageConsumption: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_INCOME:
    case ActionReduxTypes.RESET_HO_INCOME:
      return {
        ...state,
        income: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_EXPENSE:
    case ActionReduxTypes.RESET_HO_EXPENSE:
      return {
        ...state,
        expense: Number(action.payload)
      }
    case ActionReduxTypes.SET_HO_INCOME_TRANSACTION:
    case ActionReduxTypes.RESET_HO_INCOME_TRANSACTION:
      return {
        ...state,
        incomeTransaction: action.payload
      }
    case ActionReduxTypes.SET_HO_EXPENSE_TRANSACTION:
    case ActionReduxTypes.RESET_HO_EXPENSE_TRANSACTION:
      return {
        ...state,
        expenseTransaction: action.payload
      }
    default:
      return state
  }
}
