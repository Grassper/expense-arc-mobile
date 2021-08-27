import {InitialState, ReducerActionTypes} from './types';
import {ActionReduxTypes} from './action';

const initialState = {
    loading: false,
    categories: []
};

export const categories = (
    state: InitialState = initialState,
    action: ReducerActionTypes
): InitialState => {
    switch (action.type) {
        case ActionReduxTypes.SET_CA_CATEGORIES:
            return {
                ...initialState,
                categories: action.payload
            };
        case ActionReduxTypes.RESET_CA_CATEGORIES:
            return {
                ...initialState,
                categories: action.payload
            };
        default:
            return state;
    }
};
