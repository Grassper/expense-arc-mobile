import {Category, ResetCategories, SetCategories} from './types';

export const ActionReduxTypes = {
    SET_CA_CATEGORIES: 'SET_CA_CATEGORIES',
    RESET_CA_CATEGORIES: 'RESET_CA_CATEGORIES'
};

/**
 * categories
 */

export const setCategories = (categories: Category[]): SetCategories => ({
    type: 'SET_CA_CATEGORIES',
    payload: categories
});

export const resetCategories = (): ResetCategories => ({
    type: 'RESET_CA_CATEGORIES',
    payload: []
});
