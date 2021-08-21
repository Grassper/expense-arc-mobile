import {HomeType} from './home/types';
import {TransactionOverviewType} from './transactionOverview/types';

export interface StoreType {
    home: HomeType;
    transactionOverview: TransactionOverviewType;
}
