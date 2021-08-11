import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {OverviewTemplate} from '@/root/src/components/shared/Overview';
import {TransactionCard} from '@/root/src/components/shared/Transaction';
import {RootStackParamList} from '@/root/src/types/index';

type ListScreenRouteProp = RouteProp<RootStackParamList, 'TransactionList'>;

type ListScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TransactionList'
>;

type Props = {
    navigation: ListScreenNavigationProp;
    route: ListScreenRouteProp;
};

export const TransactionList: React.FC<Props> = ({route, navigation}) => {
    const {heading, subHeading} = route.params;
    return (
        <OverviewTemplate
            heading={heading}
            onClick={() => navigation.goBack()}
            subHeading={subHeading}>
            <TransactionCard
                onClick={() => navigation.navigate('TransactionDetail')}
                top
            />
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
