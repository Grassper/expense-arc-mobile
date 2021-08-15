import {
    GraphFilterType,
    TransactionFilterType,
    TransactionOverviewType
} from '@/root/src/types';

const error = {
    errorOccurred: false,
    errorMessage: ''
};

const filter = {
    graphFilter: 'monthly' as GraphFilterType,
    transactionFilter: 'expense' as TransactionFilterType
};

const stats = {
    candlePercents: []
};

const initialState = {
    loading: false,
    ...stats,
    ...filter,
    ...error
};

interface ActionType<Payload> {
    type: string;
    payload: Payload;
}

export const transactionOverview = (
    state: TransactionOverviewType = initialState,
    action: ActionType<string>
): TransactionOverviewType => {
    switch (action.type) {
        default:
            return state;
    }
};
