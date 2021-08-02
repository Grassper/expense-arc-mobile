import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {OverviewTemplate} from '@/root/src/components/shared/Overview';
import {TransactionCard} from '@/root/src/components/shared/Transaction';

type RootStackParamList = {
    Summary: undefined;
    Overview: undefined;
    SactionList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SactionList'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

export const Transaction: React.FC<Props> = () => {
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
