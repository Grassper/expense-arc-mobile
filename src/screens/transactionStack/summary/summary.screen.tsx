import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import Container from '../../../components/container.component';
import {HeadingContainer} from '../../settings/settings.styles';

type RootStackParamList = {
    Summary: undefined;
    ExpenseOverview: undefined;
    IncomeOverview: undefined;
    CategorySummary: undefined;
    CategoryItemList: undefined;
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
                <TouchableOpacity
                    onPress={() => navigation.push('ExpenseOverview')}>
                    <Text>overview</Text>
                </TouchableOpacity>
            </HeadingContainer>
        </Container>
    );
};

export default Summary;
