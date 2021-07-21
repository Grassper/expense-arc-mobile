import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import OverviewTemplate from '@/root/src/components/overviewTemplate.component';

type RootStackParamList = {
    Summary: undefined;
    Overview: undefined;
    SactionList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Overview'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const ExpenseOverview: React.FC<Props> = ({navigation}) => {
    return (
        <OverviewTemplate
            onClick={() => navigation.goBack()}
            heading="Expense Overview"
            subHeading="You spend $ 3,040"
        />
    );
};

export default ExpenseOverview;
