import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Modal, Platform, Pressable} from 'react-native';

import {SaveButton, ToggleButton} from '@/root/src/components/shared/Button';
import {
    Container,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

import * as Styled from './Styles';
import {
    DTPicker,
    InputBox,
    InputSelect,
    InputTypePicker,
    PickerModel
} from './utils';

interface PropsTypes {
    onClick: () => void;
}

type AndroidMode = 'date' | 'time';

const CategoryArr = [
    ['Food', '#FBAB7E'],
    ['Petrol', '#85FFBD'],
    ['Shopping', '#C850C0']
];
const TransferArr = [['Indian Bank x31'], ['State Bank x31'], ['Cash']];

export const Form: React.FC<PropsTypes> = ({onClick}) => {
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

    const handleSubmit = async (): Promise<void> => {};

    return (
        <Container>
            <Header>
                <HeadingText size={22}>Add Transaction</HeadingText>
                <Pressable onPress={onClick}>
                    <Styled.ButtonContainer>
                        <Ionicons
                            color={Colors.white}
                            name="ios-close"
                            size={24}
                        />
                    </Styled.ButtonContainer>
                </Pressable>
            </Header>
            <Styled.Spacer />
            <ScrollContainer>
                <InputTypePicker
                    name="Type"
                    input={type}
                    onClick={(value: string) => setType(value)}
                />
                <InputBox
                    name="Name"
                    onChangeText={setName}
                    placeholder="Food"
                    placeholderTextColor={Colors.whiteTab}
                    value={name}
                />
                <InputSelect
                    name="Category"
                    onPress={() => setCategoryModel(true)}
                    input={category}
                />
                <InputBox
                    name="Amount"
                    onChangeText={setAmount}
                    placeholder="$10"
                    placeholderTextColor={Colors.whiteTab}
                    value={amount}
                />
                <DTPicker
                    date={date}
                    showDatepicker={showDatepicker}
                    showTimepicker={showTimepicker}
                />
                <InputSelect
                    name="Transfer Type"
                    onPress={() => setTransferModel(true)}
                    input={transferType}
                />
                <Styled.InputContainer>
                    <Styled.RowContainer>
                        <Styled.RowText>Upload Bill Or Warranty</Styled.RowText>
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
                    </Styled.RowContainer>
                </Styled.InputContainer>
                {!!imageUrl && (
                    <Styled.ImageContainer>
                        <Styled.Image
                            accessibilityLabel="bill image"
                            source={{
                                uri:
                                    'https://images.pexels.com/' +
                                    'photos/1602726/pexels-photo-1602726.jpeg'
                            }}
                        />
                    </Styled.ImageContainer>
                )}
                <Styled.InputContainer>
                    <Styled.RowContainer>
                        <Styled.RowText>Track As Expense</Styled.RowText>
                        <ToggleButton
                            isEnabled={trackAsExpense}
                            onClick={() => setTrackAsExpense(!trackAsExpense)}
                        />
                    </Styled.RowContainer>
                </Styled.InputContainer>
                <Styled.InputContainer>
                    <Styled.RowContainer>
                        <Styled.RowText>Link Transaction</Styled.RowText>
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
                    </Styled.RowContainer>
                </Styled.InputContainer>
                {!!transactionMessage && (
                    <Styled.InputContainer>
                        <Styled.Picker color={Colors.white}>
                            {transactionMessage}
                        </Styled.Picker>
                    </Styled.InputContainer>
                )}
                <SaveButton onClick={handleSubmit} />
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
            </ScrollContainer>
        </Container>
    );
};
