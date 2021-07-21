import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import Container from '../../components/container.component';
import HeadingContainer from '../../components/headingContainer.component';

type RootStackParamList = {
    Summary: undefined;
    Overview: undefined;
    SactionList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Summary'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Text = styled.Text`
    color: #fff;
`;

const Summary: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <HeadingContainer>
                <TouchableOpacity onPress={() => navigation.push('Overview')}>
                    <Text>ExpenseOverview</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Overview')}>
                    <Text>IncomeOverview</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('SactionList')}>
                    <Text>SactionList</Text>
                </TouchableOpacity>
            </HeadingContainer>
        </Container>
    );
};

export default Summary;
