import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import OverviewTemplate from '@/root/src/components/overviewTemplate.component';
import SactionCard from '@/root/src/components/sactionCard.component';

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

const SactionList: React.FC<Props> = ({navigation}) => {
    return (
        <OverviewTemplate
            onClick={() => {}}
            heading="Food"
            subHeading="You spend $ 3,040">
            <SactionCard top />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard />
            <SactionCard bottom />
        </OverviewTemplate>
    );
};

export default SactionList;
