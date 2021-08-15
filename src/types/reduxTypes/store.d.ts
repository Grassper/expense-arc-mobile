import {HomeType} from './home';
import {TransactionOverviewType} from './transactionOverview';

export interface StoreType {
    home: HomeType;
    transactionOverview: TransactionOverviewType;
}
