import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { IconObj } from '@/root/iconPicker'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/root/src/constants/colors'
import {Category} from '@/root/src/redux/categories/types'
interface ModeTypes {
  mode: string
}

interface OverviewCardTypes {
  tagText: string
  topRightText: string
  topLeftText: string
  bottomRightText?: string
  bottomLeftText?: string
  mode: string
  category: Category
  onClick?: () => void
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  align-self: flex-end;
  margin-bottom: 20px;
`

const ContentContainer = styled.View<ModeTypes>`
  background-color: ${props =>
    props.mode === 'dark' ? Colors.darkGray : Colors.white};
  padding: ${props => (props.mode === 'dark' ? '15px 20px' : '0px 20px')};
  flex: 1;
  padding-left: 40px;
  border-radius: 10px;
`

interface TagContainerTypes {
  color: string
}

const TagContainer = styled.View<TagContainerTypes>`
   background-color: ${props => props.color};
  padding: 10px 17px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: -25px;
  z-index: 10;
`

const TopView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
`

const BottomView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const TopText = styled.Text<ModeTypes>`
  font-family: 'ms';
  font-size: 16px;
  line-height: 28px;
  color: ${props => (props.mode === 'dark' ? Colors.white : Colors.primary)};
`

const BottomText = styled.Text<ModeTypes>`
  font-family: 'mr';
  font-size: 14px;
  line-height: 24px;
  color: ${props => (props.mode === 'dark' ? Colors.white : Colors.primary)};
`

export const OverviewCard: React.FC<OverviewCardTypes> = ({
  tagText,
  topRightText,
  topLeftText,
  bottomRightText,
  bottomLeftText,
  mode,
  category,
  onClick
}) => {
  const IconBoxComponent = IconObj[category.iconSet]
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <Container>
        <TagContainer color={category.backgroundColor}>
          <IconBoxComponent
            name={category.iconName}
            size={20}
            color={category.iconColor || '#fff'}
          />
        </TagContainer>
        <ContentContainer mode={mode}>
          <TopView>
            <TopText mode={mode}>{topLeftText}</TopText>
            <TopText mode={mode}>{topRightText}</TopText>
          </TopView>
          <BottomView>
            <BottomText mode={mode}>{bottomLeftText}</BottomText>
            <BottomText mode={mode}>{bottomRightText}</BottomText>
          </BottomView>
        </ContentContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}
