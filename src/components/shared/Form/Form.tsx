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

import {SaveButton, ToggleButton} from '@/root/src/components/shared/Button';
import {
    Container,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {PickerModel} from '@/root/src/components/shared/Form/PickerModal';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';
import {addCategory} from '@/root/src/utils/helpers/db';

import * as Styled from './Styles';

interface FormTypes {
    onClick: () => void;
}

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

    const handleSubmit = async (): Promise<void> => {};

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
                <Styled.InputContainer>
                    <Styled.TextBold>Type</Styled.TextBold>
                    <Styled.RadioContainer>
                        <Styled.RadioButton
                            color={
                                type === 'Income'
                                    ? Colors.skyBlue
                                    : Colors.darkGray
                            }
                            onPress={() => setType('Income')}>
                            <Styled.CircleOuter>
                                {type === 'Income' && <Styled.CircleInner />}
                            </Styled.CircleOuter>
                            <Styled.TextLight>Income</Styled.TextLight>
                        </Styled.RadioButton>
                        <Styled.RadioButton
                            color={
                                type === 'Expense'
                                    ? Colors.pink
                                    : Colors.darkGray
                            }
                            onPress={() => setType('Expense')}>
                            <Styled.CircleOuter>
                                {type === 'Expense' && <Styled.CircleInner />}
                            </Styled.CircleOuter>
                            <Styled.TextLight>Expense</Styled.TextLight>
                        </Styled.RadioButton>
                    </Styled.RadioContainer>
                </Styled.InputContainer>
                <Styled.InputContainer>
                    <Styled.TextBold>Name</Styled.TextBold>
                    <Styled.TextInput
                        onChangeText={setName}
                        placeholder="Food"
                        placeholderTextColor={Colors.whiteTab}
                        value={name}
                    />
                </Styled.InputContainer>
                <Styled.InputContainer>
                    <Styled.TextBold>Category</Styled.TextBold>
                    <TouchableWithoutFeedback
                        onPress={() => setCategoryModel(true)}>
                        <Styled.Picker
                            color={category ? Colors.white : Colors.whiteTab}>
                            {category || 'Select'}
                        </Styled.Picker>
                    </TouchableWithoutFeedback>
                </Styled.InputContainer>
                <Styled.InputContainer>
                    <Styled.TextBold>Amount</Styled.TextBold>
                    <Styled.TextInput
                        keyboardType="number-pad"
                        onChangeText={setAmount}
                        placeholder="$10"
                        placeholderTextColor={Colors.whiteTab}
                        value={amount}
                    />
                </Styled.InputContainer>
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
                                    color={
                                        date ? Colors.white : Colors.whiteTab
                                    }>
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
                                    color={
                                        date ? Colors.white : Colors.whiteTab
                                    }>
                                    {date.toLocaleTimeString()}
                                </Styled.DateText>
                            </Styled.DateContainer>
                        </TouchableWithoutFeedback>
                    </Styled.InputContainer>
                </Styled.SplitContainer>
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
                <Styled.InputContainer>
                    <Styled.TextBold>Transfer Type</Styled.TextBold>
                    <TouchableWithoutFeedback
                        onPress={() => setTransferModel(true)}>
                        <Styled.Picker
                            color={
                                transferType ? Colors.white : Colors.whiteTab
                            }>
                            {transferType || 'Select'}
                        </Styled.Picker>
                    </TouchableWithoutFeedback>
                </Styled.InputContainer>
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
            </ScrollContainer>
        </Container>
    );
};
