import {InitialState as CategoriesTypes} from './categories/types';
import {InitialState as HomeType} from './home/types';
import {InitialState as TransactionOverviewType} from './transactionOverview/types';
import {InitialState as TransferTypeTypes} from './transferTypes/types';

export interface StoreType {
    home: HomeType;
    transactionOverview: TransactionOverviewType;
    transferTypes: TransferTypeTypes;
    categories: CategoriesTypes;
}

export interface CategoryAndTransferType {
    id: string;
    name: string;
    iconName: string;
    iconSet: string;
    iconColor: string;
    backgroundColor: string;
}
