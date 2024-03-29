import {ResetTransferTypes, SetTransferTypes, TransferType} from './types';

export const ActionReduxTypes = {
    SET_TT_TRANSFER_TYPE: 'SET_TT_TRANSFER_TYPE',
    RESET_TT_TRANSFER_TYPE: 'RESET_TT_TRANSFER_TYPE'
};

/**
 * transferType
 */

export const setTransferTypes = (
    categories: TransferType[]
): SetTransferTypes => ({
    type: 'SET_TT_TRANSFER_TYPE',
    payload: categories
});

export const resetTransferTypes = (): ResetTransferTypes => ({
    type: 'RESET_TT_TRANSFER_TYPE',
    payload: []
});
