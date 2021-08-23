import {Action} from 'redux';

interface Category {
    id: string;
    name: string;
    iconName: string;
    iconSet: string;
    iconColor: string;
    backgroundColor: string;
}

export interface InitialState {
    loading: boolean;
    categories: Category[];
}

/**
 * categories
 */

export interface SetCategories extends Action {
    type: 'SET_CA_CATEGORIES';
    payload: Category[];
}

export interface ResetCategories extends Action {
    type: 'RESET_CA_CATEGORIES';
    payload: [];
}

export type ReducerActionTypes = SetCategories | ResetCategories;
