import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {OverviewTemplate} from '@/root/src/components/shared/Overview';
import {TransactionCard} from '@/root/src/components/shared/Transaction';
import {RootStackParamList} from '@/root/src/types/index';

type ListScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TransactionList'
>;

type Props = {
    navigation: ListScreenNavigationProp;
};

export const TransactionList: React.FC<Props> = () => {
    return (
        <OverviewTemplate
            onClick={() => {}}
            heading="Food"
            subHeading="You spend $ 3,040">
            <TransactionCard top />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard bottom />
        </OverviewTemplate>
    );
};
