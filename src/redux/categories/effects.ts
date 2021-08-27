import {CategoryAndTransferTypes} from '@/root/src/utils/helpers/db/actions/declaration';

export const addCategoryAsync = async (
    categoryObj: CategoryAndTransferTypes
): Promise<void> => {
    try {
    } catch (err) {
        console.error(err);
    }
};


// export const fetchEditorArticlesStartAsync = (category,ArticleId) => {
//     return async dispatch => {
//         dispatch(ArticlesEditorReset());
//         dispatch(fetchEditorArticlesStart());
//         try{
//             const response = await fetch(`https://us-central1-ardent-gearbox-294308.cloudfunctions.net/Blocks?category=${category}&articleid=${ArticleId}`);
//             const responseObject = await response.json()
//             dispatch(fetchEditorArticlesSuccess(responseObject))
//         }
//         catch(error){
//             dispatch(fetchEditorArticlesError(error))
//         }
//     }
// };
