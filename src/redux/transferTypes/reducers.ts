import {InitialState, ReducerActionTypes} from './types';

const initialState = {
    loading: false,
    transferTypes: [
        {
            id: '0caa62bf-8575-44da-adac-f9a7478c70b2',
            iconName: 'money-check',
            name: 'DBS card',
            iconSet: 'FontAwesome5',
            iconColor: '#3a6186',
            backgroundColor: '#121212'
        }
    ]
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
