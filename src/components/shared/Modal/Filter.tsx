import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {SaveButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';

interface PropTypes {
    onClick: (value: string) => void;
    inputFilter: string;
}

interface Color {
    color?: string;
}

const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #00000030;
`;

const ModalContainer = styled.View`
    width: 90%;
    padding: 20px;
    border-radius: 10px;
    background-color: ${Colors.background};
`;

const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

const RadioContainer = styled.View`
    justify-content: space-between;
`;

const RadioButton = styled.Pressable<Color>`
    width: 100%;
    background-color: ${props => (props.color ? props.color : Colors.darkGray)};
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CircleOuter = styled.View`
    border-width: 2px;
    height: 24px;
    width: 24px;
    border-radius: 50px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border-color: ${Colors.white};
`;

const CircleInner = styled.View`
    width: 60%;
    height: 60%;
    border-radius: 50px;
    background-color: ${Colors.white};
`;

const TextLight = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
`;

export const FilterModal: React.FC<PropTypes> = ({onClick, inputFilter}) => {
    const [filter, setFilter] = useState('Monthly');

    useEffect(() => {
        setFilter(inputFilter);
    }, [inputFilter]);

    const handleSubmit = (): void => {
        onClick(filter);
    };

    return (
        <Container>
            <ModalContainer>
                <TextBold>Monthly</TextBold>
                <RadioContainer>
                    <RadioButton
                        color={
                            filter === 'Daily'
                                ? Colors.skyBlue
                                : Colors.darkGray
                        }
                        onPress={() => setFilter('Daily')}>
                        <CircleOuter>
                            {filter === 'Daily' && <CircleInner />}
                        </CircleOuter>
                        <TextLight>Daily</TextLight>
                    </RadioButton>
                    <RadioButton
                        color={
                            filter === 'Weekly'
                                ? Colors.skyBlue
                                : Colors.darkGray
                        }
                        onPress={() => setFilter('Weekly')}>
                        <CircleOuter>
                            {filter === 'Weekly' && <CircleInner />}
                        </CircleOuter>
                        <TextLight>Weekly</TextLight>
                    </RadioButton>
                    <RadioButton
                        color={
                            filter === 'Monthly'
                                ? Colors.skyBlue
                                : Colors.darkGray
                        }
                        onPress={() => setFilter('Monthly')}>
                        <CircleOuter>
                            {filter === 'Monthly' && <CircleInner />}
                        </CircleOuter>
                        <TextLight>Monthly</TextLight>
                    </RadioButton>
                </RadioContainer>
                <SaveButton onClick={handleSubmit} />
            </ModalContainer>
        </Container>
    );
};
