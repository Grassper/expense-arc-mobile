import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  TouchableWithoutFeedback,
  ListRenderItem,
  FlatList
} from 'react-native'
import styled from 'styled-components/native'
import millify from 'millify'
import { OverviewCard } from '@/root/src/components/shared/Overview'
import Colors from '@/root/src/constants/colors'
import { TransactionSchema } from '@/root/src/types'
import { format } from 'date-fns'

interface TransactionSchemaExtend extends TransactionSchema {
  createdDate: string
  createdTime: string
}
interface Props {
  Heading: string
  onClick?: () => void
  type: string
  incomeTransaction: TransactionSchemaExtend[]
  expenseTransaction: TransactionSchemaExtend[]
}

const HeadingContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`

const HeadingTextBold = styled.Text`
  font-size: 16px;
  font-family: 'ms';
  color: ${Colors.primary};
`

const HeadingTextLight = styled.Text`
  font-size: 14px;
  font-family: 'ms';
  color: ${Colors.toggleColor};
`

export const TransactionScroll: React.FC<Props> = ({
  Heading,
  type,
  onClick,
  incomeTransaction,
  expenseTransaction
}) => {
  const navigation = useNavigation()


  console.log(incomeTransaction)

  const handleNavigation = (): void => {
    navigation.navigate('TransactionDetail')
  }

  const CardRenderer: ListRenderItem<TransactionSchemaExtend> = ({ item }) => {
    return (
      <OverviewCard
        bottomLeftText={format(new Date(item.createdDate), 'PP')}
        mode='light'
        onClick={handleNavigation}
        tagText='pf'
        topLeftText={item.name}
        topRightText={millify(item.amount)}
        category={item.category}
      />
    )
  }

  return (
    <>
      <HeadingContainer>
        <HeadingTextBold>{Heading}</HeadingTextBold>
        <TouchableWithoutFeedback onPress={onClick}>
          <HeadingTextLight>{type}</HeadingTextLight>
        </TouchableWithoutFeedback>
      </HeadingContainer>
      {type === 'expense' ? (
        <FlatList
          data={expenseTransaction}
          renderItem={CardRenderer}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={incomeTransaction}
          renderItem={CardRenderer}
          keyExtractor={item => item.id}
        />
      )}
    </>
  )
}
