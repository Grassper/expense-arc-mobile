import {
  addTransaction,
  getTransactionPaginate,
  removeTransactionAll
} from '@/root/src/utils/helpers/db/actions'

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

export const AddTransactionAsync = async (transactionObj: TransactionTypes) => {
  try {
    await addTransaction(transactionObj)
    const obj = await getTransactionPaginate('expense', '10', '0')
  } catch (err) {
    console.log(err)
  }
}
