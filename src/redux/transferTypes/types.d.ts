import {Action} from 'redux';

interface TransferType {
    id: string;
    name: string;
    iconName: string;
    iconSet: string;
    iconColor: string;
    backgroundColor: string;
}

export interface InitialState {
    loading: boolean;
    transferTypes: TransferType[];
}

/**
 * transferType
 */

export interface SetTransferTypes extends Action {
    type: 'SET_TT_TRANSFER_TYPE';
    payload: TransferType[];
}

export interface ResetTransferTypes extends Action {
    type: 'RESET_TT_TRANSFER_TYPE';
    payload: [];
}

export type ReducerActionTypes = SetTransferTypes | ResetTransferTypes;
