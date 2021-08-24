import {InitialState, ReducerActionTypes} from './types';

const initialState = {
    loading: false,
    categories: [
        {
            id: '6c5fc8a5-3012-4d6b-b33b-5da5950b8b48',
            name: 'food',
            iconName: 'md-fast-food-sharp',
            iconSet: 'Ionicons',
            iconColor: '#ffff1c',
            backgroundColor: '#121212'
        }
    ]
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
