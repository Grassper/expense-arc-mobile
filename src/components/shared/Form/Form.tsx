import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState, useEffect } from 'react'
import { Modal, Platform, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { SaveButton, ToggleButton } from '@/root/src/components/shared/Button'
import {
  Container,
  ScrollContainer
} from '@/root/src/components/shared/Container'
import { Header } from '@/root/src/components/shared/Header'
import { HeadingText } from '@/root/src/components/shared/HeadingText'
import Colors from '@/root/src/constants/colors'
import { StoreType } from '@/root/src/redux/types'

import { getCategoryAsync, resetCategories } from '@/root/src/redux/categories'
import {
  getTransferTypesAsync,
  resetTransferTypes
} from '@/root/src/redux/transferTypes'


import { seedHomeAsync } from '@/root/src/redux/home'
import { AddTransactionAsync } from '@/root/src/redux/transactions'

import * as Styled from './Styles'
import {
  DTPicker,
  InputBox,
  InputSelect,
  InputTypePicker,
  PickerModel
} from './utils'

interface PropsTypes {
  onClick: () => void
}

type AndroidMode = 'date' | 'time'

export const Form: React.FC<PropsTypes> = ({ onClick }) => {
  const { categories } = useSelector<StoreType, StoreType['categories']>(
    state => state.categories
  )
  const { transferTypes } = useSelector<StoreType, StoreType['transferTypes']>(
    state => state.transferTypes
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoryAsync('10', '0'))
    dispatch(getTransferTypesAsync('10', '0'))
    return () => {
      dispatch(resetCategories())
      dispatch(resetTransferTypes())
    }
  }, [
    getCategoryAsync,
    resetCategories,
    getTransferTypesAsync,
    resetTransferTypes
  ])

  const [categoryModal, setCategoryModal] = useState(false)
  const [transferModal, setTransferModal] = useState(false)

  const [type, setType] = useState('expense')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [category, setCategory] = useState('')
  const [transferTypeId, setTransferTypeId] = useState('')
  const [transferType, setTransferType] = useState('')
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState('')
  const [transactionMessage, setTransactionMessage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event: Event, selectedDate?: Date): void => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode: string): void => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = (): void => {
    showMode('date')
  }

  const showTimepicker = (): void => {
    showMode('time')
  }

  const handleSubmit = async (): Promise<void> => {
    const createdDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    const createdTime = `${date.getHours()}:${String(
      date.getMinutes()
    ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
    await AddTransactionAsync({
      type,
      name,
      categoryId,
      description,
      amount: Number(amount),
      createdDate,
      createdTime,
      transferTypeId,
      transactionMessage,
      billUrl: imageUrl
    })
    dispatch(seedHomeAsync())
    onClick()
  }

  const handleCategory = (id: string, content: string): void => {
    setCategoryId(id)
    setCategory(content)
  }

  const handleTransferType = (id: string, content: string): void => {
    setTransferTypeId(id)
    setTransferType(content)
  }

  return (
    <Container>
      <Header>
        <HeadingText size={22}>Add Transaction</HeadingText>
        <Pressable onPress={onClick}>
          <Styled.ButtonContainer>
            <Ionicons color={Colors.white} name='ios-close' size={24} />
          </Styled.ButtonContainer>
        </Pressable>
      </Header>
      <Styled.Spacer />
      <ScrollContainer>
        <InputTypePicker
          name='Type'
          input={type}
          onClick={(value: string) => setType(value)}
        />
        <InputBox
          name='Name'
          onChangeText={setName}
          placeholder='Food'
          placeholderTextColor={Colors.whiteTab}
          value={name}
        />
        <InputSelect
          name='Category'
          onPress={() => setCategoryModal(true)}
          input={category}
        />
        <InputBox
          name='Amount'
          onChangeText={setAmount}
          placeholder='$10'
          placeholderTextColor={Colors.whiteTab}
          value={amount}
        />
        <DTPicker
          date={date}
          showDatepicker={showDatepicker}
          showTimepicker={showTimepicker}
        />
        <InputSelect
          name='Transfer Type'
          onPress={() => setTransferModal(true)}
          input={transferType}
        />
        <InputBox
          name='Description'
          onChangeText={setDescription}
          placeholder='Optional'
          placeholderTextColor={Colors.whiteTab}
          value={description}
        />
        <Styled.InputContainer>
          <Styled.RowContainer>
            <Styled.RowText>Upload Bill Or Warranty</Styled.RowText>
            {!imageUrl ? (
              <Feather color={Colors.white} name='upload-cloud' size={24} />
            ) : (
              <Ionicons color={Colors.white} name='ios-close' size={24} />
            )}
          </Styled.RowContainer>
        </Styled.InputContainer>
        {!!imageUrl && (
          <Styled.ImageContainer>
            <Styled.Image
              accessibilityLabel='bill image'
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
            <Styled.RowText>Link Transaction</Styled.RowText>
            {!transactionMessage ? (
              <AntDesign color={Colors.white} name='link' size={24} />
            ) : (
              <Ionicons color={Colors.white} name='ios-close' size={24} />
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
        <Modal animationType='fade' visible={categoryModal}>
          <PickerModel
            contentArray={categories}
            onClick={() => setCategoryModal(false)}
            selected={category}
            setSelected={handleCategory}
            title='Categories'
          />
        </Modal>
        <Modal animationType='fade' visible={transferModal}>
          <PickerModel
            contentArray={transferTypes}
            onClick={() => setTransferModal(false)}
            selected={transferType}
            setSelected={handleTransferType}
            title='Transfer Types'
          />
        </Modal>
        {show && (
          <DateTimePicker
            display='default'
            is24Hour
            mode={mode as AndroidMode}
            onChange={onChange}
            testID='dateTimePicker'
            value={date}
          />
        )}
      </ScrollContainer>
    </Container>
  )
}
