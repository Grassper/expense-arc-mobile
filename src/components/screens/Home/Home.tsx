import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import millify from 'millify'
import React, { useState,useEffect } from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { Form } from '@/root/src/components/shared/Form'
import {
  BudgetModel,
  FilterModal,
  TypeModal
} from '@/root/src/components/shared/Modal'
import { OverviewStats } from '@/root/src/components/shared/Overview'
import { TransactionScroll } from '@/root/src/components/shared/Transaction'
import Colors from '@/root/src/constants/colors'
import { StoreType } from '@/root/src/redux/types'
import { RootStackParamList } from '@/root/src/types'

import { seedHomeAsync } from '@/root/src/redux/home'

import * as Styled from './Styles'

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeTabs'
>

type Props = {
  navigation: HomeScreenNavigationProp
}

export const Home: React.FC<Props> = () => {
  const home = useSelector<StoreType, StoreType['home']>(state => state.home)
  const [formModalVisible, setFormModalVisible] = useState(false)
  const [budgetModalVisible, setBudgetModalVisible] = useState(false)
  const [filterModalVisible, setFilterModalVisible] = useState(false)
  const [typeModalVisible, setTypeModalVisible] = useState(false)
  const [type, setType] = useState('Expense')
  const [filter, setFilter] = useState('Monthly')

  const handleTypeModal = (value: string): void => {
    setType(value)
    setTypeModalVisible(false)
  }

  const handleFilterModal = (value: string): void => {
    setFilter(value)
    setFilterModalVisible(false)
  }


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(seedHomeAsync())
  },[seedHomeAsync])

  return (
    <Styled.Container>
      <Modal animationType='slide' visible={formModalVisible}>
        <Form onClick={() => setFormModalVisible(false)} />
      </Modal>
      <Modal animationType='fade' transparent visible={budgetModalVisible}>
        <BudgetModel onClick={() => setBudgetModalVisible(false)} />
      </Modal>
      <Modal animationType='fade' transparent visible={typeModalVisible}>
        <TypeModal
          inputType={type}
          onClick={(value: string) => handleTypeModal(value)}
        />
      </Modal>
      <Modal animationType='fade' transparent visible={filterModalVisible}>
        <FilterModal
          inputFilter={filter}
          onClick={(value: string) => handleFilterModal(value)}
        />
      </Modal>
      <Styled.DashboardContainer>
        <Styled.DashboardWrapper>
          <Styled.TopText>Total expense</Styled.TopText>
          <Styled.MainText>$ {millify(home.budgetConsumed)}</Styled.MainText>
          <Styled.BudgetContainer>
            <Styled.Text>of $ {millify(home.budget)} budgeted</Styled.Text>
            <Styled.PencilIcon onPress={() => setBudgetModalVisible(true)}>
              <EvilIcons color={Colors.white} name='pencil' size={24} />
            </Styled.PencilIcon>
          </Styled.BudgetContainer>
          <Styled.PercentContainer>
            <Styled.BarContainer>
              <Styled.ConsumedBar
                width={
                  Math.ceil((home.budgetConsumed / home.budget) * 100) || 0
                }
              />
            </Styled.BarContainer>
            <Styled.Text>
              {Math.ceil((home.budgetConsumed / home.budget) * 100) || 0}%
            </Styled.Text>
          </Styled.PercentContainer>
          <Styled.RateContainer>
            <Styled.RateBoxLeft>
              <Styled.RateText>$ {millify(home.todayConsumed)}</Styled.RateText>
              <Styled.Text>Today spent</Styled.Text>
            </Styled.RateBoxLeft>
            <Styled.Line />
            <Styled.RateBoxRight>
              <Styled.RateText>
                $ {millify(home.averageConsumption)}
              </Styled.RateText>
              <Styled.Text>Average / day</Styled.Text>
            </Styled.RateBoxRight>
          </Styled.RateContainer>
        </Styled.DashboardWrapper>
      </Styled.DashboardContainer>
      <Styled.DetailsWrapper>
        <Styled.DetailsContainer>
          <TouchableWithoutFeedback onPress={() => setFormModalVisible(true)}>
            <Styled.IconContainer>
              <Ionicons
                color={Colors.background}
                name='ios-add-circle'
                size={50}
              />
            </Styled.IconContainer>
          </TouchableWithoutFeedback>
          <OverviewStats
            Expense={home.expense}
            filter={home.overviewFilter}
            Heading='Recap'
            Income={home.income}
            onClick={() => setFilterModalVisible(true)}
          />
          <TransactionScroll
            Heading='Transaction'
            onClick={() => setTypeModalVisible(true)}
            type={home.transactionFilter}
            incomeTransaction={home.incomeTransaction}
            expenseTransaction={home.expenseTransaction}
          />
        </Styled.DetailsContainer>
      </Styled.DetailsWrapper>
    </Styled.Container>
  )
}
