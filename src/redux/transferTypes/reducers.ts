import {InitialState, ReducerActionTypes} from './types';

const initialState = {
    loading: false,
    transferTypes: []
};

export const transferTypes = (
    state: InitialState = initialState,
    action: ReducerActionTypes
): InitialState => {
    switch (action.type) {
        default:
            return state;
    }
};
