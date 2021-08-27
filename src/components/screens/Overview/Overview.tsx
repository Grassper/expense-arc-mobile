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

export const Overview: React.FC<Props> = ({route, navigation}) => {
    const {heading, subHeading} = route.params;

    return (
        <OverviewTemplate
            heading={heading}
            onClick={() => navigation.goBack()}
            subHeading={subHeading}>
            <OverviewCard
                bottomLeftText="2 Payments"
                bottomRightText="$ 1,024"
                mode="dark"
                onClick={() =>
                    navigation.navigate('CategorySummary', {
                        heading: 'Vehicle',
                        subHeading: 'You Spend $1,024'
                    })
                }
                tagText="V"
                topLeftText="Vehicle"
                topRightText="100%"
            />
        </OverviewTemplate>
    );
};
