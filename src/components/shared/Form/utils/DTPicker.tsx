import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import * as Styled from '@/root/src/components/shared/Form/Styles';
import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    date: Date;
    showDatepicker: () => void;
    showTimepicker: () => void;
}

export const DTPicker: React.FC<PropsTypes> = ({
    date,
    showDatepicker,
    showTimepicker
}) => {
    return (
        <Styled.SplitContainer>
            <Styled.InputContainer>
                <Styled.TextBold>Date</Styled.TextBold>
                <TouchableWithoutFeedback onPress={showDatepicker}>
                    <Styled.DateContainer>
                        <MaterialCommunityIcons
                            color={Colors.white}
                            name="calendar"
                            size={24}
                        />
                        <Styled.DateText
                            color={date ? Colors.white : Colors.whiteTab}>
                            {date.toLocaleDateString()}
                        </Styled.DateText>
                    </Styled.DateContainer>
                </TouchableWithoutFeedback>
            </Styled.InputContainer>
            <Styled.Spacer />
            <Styled.InputContainer>
                <Styled.TextBold>Time</Styled.TextBold>
                <TouchableWithoutFeedback onPress={showTimepicker}>
                    <Styled.DateContainer>
                        <Entypo
                            color={Colors.white}
                            name="time-slot"
                            size={24}
                        />
                        <Styled.DateText
                            color={date ? Colors.white : Colors.whiteTab}>
                            {date.toLocaleTimeString()}
                        </Styled.DateText>
                    </Styled.DateContainer>
                </TouchableWithoutFeedback>
            </Styled.InputContainer>
        </Styled.SplitContainer>
    );
};
