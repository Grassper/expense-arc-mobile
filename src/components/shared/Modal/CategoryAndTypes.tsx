import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { IconPicker } from '@/root/iconPicker'
import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components/native'

import Colors from '@/root/src/constants/colors'
import { Colorswatch } from '@/root/src/constants/colorswatch'
import { addCategoryAsync } from '@/root/src/redux/categories'

interface PropsTypes {
  onClick: () => void
  title: string
}

interface ColorBoxTypes {
  color: string
  selected?: boolean
}

const ModalContainer = styled.View`
  padding: 20px;
  flex: 1;
  background-color: ${Colors.background};
`

const ButtonContainer = styled.View`
  background-color: ${Colors.darkGray};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

const MainText = styled.Text`
  font-family: 'mm';
  font-size: 18px;
  color: ${Colors.white};
  margin: 15px 0px;
`

const MainInput = styled.TextInput`
  font-size: 16px;
  color: ${Colors.white};
  background-color: ${Colors.primary};
  border-radius: 7px;
  font-family: 'mm';
  padding: 17px 15px;
`

const HeaderContainer = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

const ColorsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const ColorBox = styled.Pressable<ColorBoxTypes>`
  background-color: ${props => props.color};
  width: 50px;
  height: 40px;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`

export const CategoryAndTypesModal: React.FC<PropsTypes> = ({
  onClick,
  title
}) => {
  const [name, setName] = useState('')
  const [iconName, setIconName] = useState('')
  const [iconSet, setIconSet] = useState('')
  const [color, setColor] = useState(Colors.primary)
  const [iconId, setIconId] = useState('')
  const handleSubmit = async (): Promise<void> => {
    const date = new Date()
    const createdDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const createdTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    await addCategoryAsync({
      name,
      iconName,
      iconSet,
      iconColor: color,
      backgroundColor: Colors.primary,
      createdDate,
      createdTime
    })
    onClick()
  }

  const pickIcon = (
    uuid: string,
    _: string,
    icon: string,
    iconCollection: string
  ): void => {
    setIconName(icon)
    setIconSet(iconCollection)
    setIconId(uuid)
  }

  return (
    <ModalContainer>
      <HeaderContainer>
        <Pressable onPress={onClick}>
          <ButtonContainer>
            <Ionicons color={Colors.white} name='ios-close' size={24} />
          </ButtonContainer>
        </Pressable>
        <Pressable onPress={handleSubmit}>
          <ButtonContainer>
            <MaterialIcons color={Colors.white} name='done' size={24} />
          </ButtonContainer>
        </Pressable>
      </HeaderContainer>
      <MainText>Name</MainText>
      <MainInput
        onChangeText={setName}
        placeholder='Food'
        placeholderTextColor={Colors.whiteTab}
        value={name}
      />
      <MainText>Colors</MainText>
      <ColorsContainer>
        {Colorswatch.map((entry, index) => (
          <ColorBox color={entry} onPress={() => setColor(entry)} key={index}>
            {color === entry && (
              <Feather name='check-circle' size={20} color={Colors.white} />
            )}
          </ColorBox>
        ))}
      </ColorsContainer>
      <IconPicker
        iconsTitle='Icons'
        iconSize={20}
        backgroundColor={`${color}80`}
        iconColor={Colors.white}
        placeholderText='Search Food, shopping ..'
        placeholderTextColor={Colors.whiteTab}
        onClick={pickIcon}
        selectedIconId={iconId}
        selectionIconBadgeColor={Colors.dodgerBlue}
        flatListProps={{
          numColumns: 5,
          contentContainerStyle: styles.flatList
        }}
        iconContainerStyle={styles.iconContainer}
        textInputStyle={styles.textInput}
        textStyle={styles.textField}
      />
    </ModalContainer>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  flatList: {
    alignItems: 'center'
  },
  textField: {
    fontSize: 18,
    fontFamily: 'mm'
  },
  textInput: {
    fontFamily: 'mm',
    backgroundColor: Colors.primary
  }
})
