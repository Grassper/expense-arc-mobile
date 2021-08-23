import {InitialState, ReducerActionTypes} from './types';

const initialState = {
    loading: false,
    categories: []
};

export const categories = (
    state: InitialState = initialState,
    action: ReducerActionTypes
): InitialState => {
    switch (action.type) {
        default:
            return state;
    }
};
