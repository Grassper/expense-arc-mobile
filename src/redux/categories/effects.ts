import {
  addCategory,
  getCategoryPaginate,
  removeCategoryAll
} from '@/root/src/utils/helpers/db/actions'

interface CategoryTypes {
  name: string
  iconName: string
  iconSet: string
  iconColor: string
  backgroundColor: string
  createdDate: string
  createdTime: string
}

export const addCategoryAsync = async (category: CategoryTypes) => {
  try {
    await addCategory(category)
    const obj = await getCategoryPaginate('10', '0')
    console.log(obj)
  } catch (err) {
    console.log(err)
  }
}
