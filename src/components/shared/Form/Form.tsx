import {
    AntDesign,
    Entypo,
    Feather,
    Ionicons,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
    Modal,
    Platform,
    Pressable,
    TouchableWithoutFeedback
} from 'react-native';
import styled from 'styled-components/native';

import {SaveButton, ToggleButton} from '@/root/src/components/shared/Button';
import {
    Container,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {PickerModel} from '@/root/src/components/shared/Form/PickerModal';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

interface FormTypes {
    onClick: () => void;
}

interface Color {
    color?: string;
}

const ButtonContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 40px;
    height: 40px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 20px;
    flex: auto;
`;

const ImageContainer = styled.View`
    margin-bottom: 20px;
    height: 150px;
    flex: auto;
    border-radius: 7px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-color: ${Colors.white};
`;

const SplitContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

const RowText = styled(TextBold)`
    margin-bottom: 0px;
`;

const RadioContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const RowContainer = styled(RadioContainer)`
    align-items: center;
`;

const RadioButton = styled.Pressable<Color>`
    width: 45%;
    background-color: ${props => (props.color ? props.color : Colors.darkGray)};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    border-radius: 10px;
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

const TextInput = styled.TextInput`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 17px 15px;
`;

const TextLight = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
`;

const Picker = styled(TextLight)<Color>`
    color: ${props => props.color};
    background-color: ${Colors.darkGray};
    line-height: 28px;
    border-radius: 7px;
    padding: 20px 15px;
`;

const Spacer = styled.View`
    padding: 5px;
`;

const DateContainer = styled.View`
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 20px 15px;
    flex-direction: row;
    align-items: center;
`;

const DateText = styled(TextLight)<Color>`
    margin-left: 10px;
    color: ${props => props.color};
`;

const CategoryArr = [
    ['Food', '#FBAB7E'],
    ['Petrol', '#85FFBD'],
    ['Shopping', '#C850C0']
];
const TransferArr = [['Indian Bank x31'], ['State Bank x31'], ['Cash']];

export const Form: React.FC<FormTypes> = ({onClick}) => {
    const [categoryModel, setCategoryModel] = useState(false);
    const [transferModel, setTransferModel] = useState(false);

    const [type, setType] = useState('Expense');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [transferType, setTransferType] = useState('');
    const [date, setDate] = useState(new Date());
    const [trackAsExpense, setTrackAsExpense] = useState(true);
    const [transactionMessage, setTransactionMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: Event, selectedDate?: Date): void => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: string): void => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = (): void => {
        showMode('date');
    };

    const showTimepicker = (): void => {
        showMode('time');
    };

    type AndroidMode = 'date' | 'time';

    const handleSubmit = (): void => {
        console.log({
            type,
            name,
            amount,
            category,
            transferType,
            date,
            trackAsExpense,
            transactionMessage,
            imageUrl
        });
    };

    return (
        <Container>
            <Modal animationType="fade" visible={categoryModel}>
                <PickerModel
                    contentArray={CategoryArr}
                    onClick={() => setCategoryModel(false)}
                    selected={category}
                    setSelected={setCategory}
                    title="Categories"
                />
            </Modal>
            <Modal animationType="fade" visible={transferModel}>
                <PickerModel
                    contentArray={TransferArr}
                    onClick={() => setTransferModel(false)}
                    selected={transferType}
                    setSelected={setTransferType}
                    title="Transfer Type"
                />
            </Modal>
            <Header>
                <HeadingText size={22}>Add Transaction</HeadingText>
                <Pressable onPress={onClick}>
                    <ButtonContainer>
                        <Ionicons
                            color={Colors.white}
                            name="ios-close"
                            size={24}
                        />
                    </ButtonContainer>
                </Pressable>
            </Header>
            <Spacer />
            <ScrollContainer>
                <InputContainer>
                    <TextBold>Type</TextBold>
                    <RadioContainer>
                        <RadioButton
                            color={
                                type === 'Income'
                                    ? Colors.skyBlue
                                    : Colors.darkGray
                            }
                            onPress={() => setType('Income')}>
                            <CircleOuter>
                                {type === 'Income' && <CircleInner />}
                            </CircleOuter>
                            <TextLight>Income</TextLight>
                        </RadioButton>
                        <RadioButton
                            color={
                                type === 'Expense'
                                    ? Colors.pink
                                    : Colors.darkGray
                            }
                            onPress={() => setType('Expense')}>
                            <CircleOuter>
                                {type === 'Expense' && <CircleInner />}
                            </CircleOuter>
                            <TextLight>Expense</TextLight>
                        </RadioButton>
                    </RadioContainer>
                </InputContainer>
                <InputContainer>
                    <TextBold>Name</TextBold>
                    <TextInput
                        onChangeText={setName}
                        placeholder="Food"
                        placeholderTextColor={Colors.whiteTab}
                        value={name}
                    />
                </InputContainer>
                <InputContainer>
                    <TextBold>Category</TextBold>
                    <TouchableWithoutFeedback
                        onPress={() => setCategoryModel(true)}>
                        <Picker
                            color={category ? Colors.white : Colors.whiteTab}>
                            {category || 'Select'}
                        </Picker>
                    </TouchableWithoutFeedback>
                </InputContainer>
                <InputContainer>
                    <TextBold>Amount</TextBold>
                    <TextInput
                        keyboardType="number-pad"
                        onChangeText={setAmount}
                        placeholder="$10"
                        placeholderTextColor={Colors.whiteTab}
                        value={amount}
                    />
                </InputContainer>
                <SplitContainer>
                    <InputContainer>
                        <TextBold>Date</TextBold>
                        <TouchableWithoutFeedback onPress={showDatepicker}>
                            <DateContainer>
                                <MaterialCommunityIcons
                                    color={Colors.white}
                                    name="calendar"
                                    size={24}
                                />
                                <DateText
                                    color={
                                        date ? Colors.white : Colors.whiteTab
                                    }>
                                    {date.toLocaleDateString()}
                                </DateText>
                            </DateContainer>
                        </TouchableWithoutFeedback>
                    </InputContainer>
                    <Spacer />
                    <InputContainer>
                        <TextBold>Time</TextBold>
                        <TouchableWithoutFeedback onPress={showTimepicker}>
                            <DateContainer>
                                <Entypo
                                    color={Colors.white}
                                    name="time-slot"
                                    size={24}
                                />
                                <DateText
                                    color={
                                        date ? Colors.white : Colors.whiteTab
                                    }>
                                    {date.toLocaleTimeString()}
                                </DateText>
                            </DateContainer>
                        </TouchableWithoutFeedback>
                    </InputContainer>
                </SplitContainer>
                {show && (
                    <DateTimePicker
                        display="default"
                        is24Hour
                        mode={mode as AndroidMode}
                        onChange={onChange}
                        testID="dateTimePicker"
                        value={date}
                    />
                )}
                <InputContainer>
                    <TextBold>Transfer Type</TextBold>
                    <TouchableWithoutFeedback
                        onPress={() => setTransferModel(true)}>
                        <Picker
                            color={
                                transferType ? Colors.white : Colors.whiteTab
                            }>
                            {transferType || 'Select'}
                        </Picker>
                    </TouchableWithoutFeedback>
                </InputContainer>
                <InputContainer>
                    <RowContainer>
                        <RowText>Upload Bill Or Warranty</RowText>
                        {!imageUrl ? (
                            <Feather
                                color={Colors.white}
                                name="upload-cloud"
                                size={24}
                            />
                        ) : (
                            <Ionicons
                                color={Colors.white}
                                name="ios-close"
                                size={24}
                            />
                        )}
                    </RowContainer>
                </InputContainer>
                {!!imageUrl && (
                    <ImageContainer>
                        <Image
                            accessibilityLabel="bill image"
                            source={{
                                uri:
                                    'https://images.pexels.com/' +
                                    'photos/1602726/pexels-photo-1602726.jpeg'
                            }}
                        />
                    </ImageContainer>
                )}
                <InputContainer>
                    <RowContainer>
                        <RowText>Track As Expense</RowText>
                        <ToggleButton
                            isEnabled={trackAsExpense}
                            onClick={() => setTrackAsExpense(!trackAsExpense)}
                        />
                    </RowContainer>
                </InputContainer>
                <InputContainer>
                    <RowContainer>
                        <RowText>Link Transaction</RowText>
                        {!transactionMessage ? (
                            <AntDesign
                                color={Colors.white}
                                name="link"
                                size={24}
                            />
                        ) : (
                            <Ionicons
                                color={Colors.white}
                                name="ios-close"
                                size={24}
                            />
                        )}
                    </RowContainer>
                </InputContainer>
                {!!transactionMessage && (
                    <InputContainer>
                        <Picker color={Colors.white}>
                            {transactionMessage}
                        </Picker>
                    </InputContainer>
                )}
                <SaveButton onClick={handleSubmit} />
            </ScrollContainer>
        </Container>
    );
};
