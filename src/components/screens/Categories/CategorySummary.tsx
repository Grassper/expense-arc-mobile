import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {
    OverviewCard,
    OverviewTemplate
} from '@/root/src/components/shared/Overview';
import {RootStackParamList} from '@/root/src/types/index';

type SummaryScreenRouteProp = RouteProp<RootStackParamList, 'CategorySummary'>;

type SummaryScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Overview'
>;

type Props = {
    navigation: SummaryScreenNavigationProp;
    route: SummaryScreenRouteProp;
};

export const CategorySummary: React.FC<Props> = ({route, navigation}) => {
    const {heading, subHeading} = route.params;

    return (
        <OverviewTemplate
            onClick={() => navigation.goBack()}
            heading={heading}
            subHeading={subHeading}>
            <OverviewCard
                tagText="C"
                topLeftText="Car Wash"
                topRightText="25%"
                bottomLeftText="1 Payments"
                bottomRightText="$ 348"
                mode="dark"
                onClick={() =>
                    navigation.navigate('TransactionList', {
                        heading: 'Vehicle',
                        subHeading: 'You Spend $340'
                    })
                }
            />
            <OverviewCard
                tagText="E"
                topLeftText="Engine works"
                topRightText="75%"
                bottomLeftText="1 Payments"
                bottomRightText="$ 768"
                mode="dark"
                onClick={() =>
                    navigation.navigate('TransactionList', {
                        heading: 'Vehicle',
                        subHeading: 'You Spend $340'
                    })
                }
            />
        </OverviewTemplate>
    );
};
