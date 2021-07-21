import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';

import OverviewTemplate from '@/root/src/components/overviewTemplate.component';

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

const Text = styled.Text`
    color: #fff;
`;

const SactionList: React.FC<Props> = ({navigation}) => {
    return (
        <OverviewTemplate
            onClick={() => {}}
            heading="Swiggy"
            subHeading="You spend $ 3,040"
        />
    );
};

export default SactionList;
