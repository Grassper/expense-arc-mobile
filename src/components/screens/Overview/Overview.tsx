import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {
    OverviewCard,
    OverviewTemplate
} from '@/root/src/components/shared/Overview';
import {RootStackParamList} from '@/root/src/types/index';

type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'Overview'>;

type OverviewScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Overview'
>;

type Props = {
    navigation: OverviewScreenNavigationProp;
    route: OverviewScreenRouteProp;
};

export const Overview: React.FC<Props> = ({navigation}) => {
    return (
        <OverviewTemplate
            onClick={() => navigation.goBack()}
            heading="Expense Overview"
            subHeading="You spend $ 3,040">
            <OverviewCard
                tagText="pf"
                topLeftText="Petrol"
                topRightText="- $100"
                bottomLeftText="April 12, 2021"
                mode="dark"
            />
        </OverviewTemplate>
    );
};
