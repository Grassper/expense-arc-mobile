import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  FlatList,
  ListRenderItem,
  NativeModules,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  TextInput,
  TextStyle,
  ViewStyle
} from 'react-native'

import { IconCollection } from './Icons'

interface IconTypes {
  iconName: string
  iconSet: string
  uuid: string
}

type IconObjTypes = {
  [key: string]:
    | typeof AntDesign
    | typeof Entypo
    | typeof EvilIcons
    | typeof Feather
    | typeof FontAwesome
    | typeof FontAwesome5
    | typeof Fontisto
    | typeof Foundation
    | typeof Ionicons
    | typeof MaterialCommunityIcons
    | typeof MaterialIcons
    | typeof Octicons
    | typeof SimpleLineIcons
    | typeof Zocial
}

export const IconObj: IconObjTypes = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
}

interface PropsTypes {
  iconColor: string
  iconSize: number
  backgroundColor: string
  placeholderText: string
  placeholderTextColor: string
  selectedIconId?: string
  selectionIconBadgeColor?: string
  searchTitle?: string
  iconsTitle?: string
  textInputStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  iconContainerStyle?: StyleProp<ViewStyle>
  onClick: (
    id: string,
    searchText: string,
    iconName: string,
    iconSet: string,
    iconColor: string,
    backgroundColor: string
  ) => void
  flatListProps?: unknown
}

export const IconPicker: React.FC<PropsTypes> = ({
  iconColor,
  backgroundColor,
  placeholderText,
  placeholderTextColor,
  searchTitle,
  selectedIconId,
  selectionIconBadgeColor,
  iconsTitle,
  onClick,
  textInputStyle,
  textStyle,
  iconSize,
  iconContainerStyle,
  flatListProps
}) => {
  const [search, setSearch] = useState('')
  const filteredIcons = IconCollection.filter(icon =>
    icon.iconName.toLowerCase().includes(search.toLowerCase())
  )

  const IconRenderer: ListRenderItem<IconTypes> = ({ item }) => {
    const IconBoxComponent = IconObj[item.iconSet]
    return (
      <Pressable
        style={{
          ...styles.iconContainer,
          ...(iconContainerStyle as {}),
          ...{ backgroundColor: backgroundColor }
        }}
        onPress={() =>
          onClick(
            item.uuid,
            search,
            item.iconName,
            item.iconSet,
            iconColor,
            backgroundColor
          )
        }
      >
        {!!selectedIconId && selectedIconId === item.uuid && (
          <View
            style={{
              ...styles.badge,
              backgroundColor: selectionIconBadgeColor
            }}
          ></View>
        )}
        <IconBoxComponent
          name={item.iconName}
          size={iconSize}
          color={iconColor || '#fff'}
        />
      </Pressable>
    )
  }

  return (
    <>
      {iconsTitle && (
        <Text style={{ ...styles.text, ...(textStyle as {}) }}>
          {iconsTitle}
        </Text>
      )}
      <FlatList
        {...flatListProps}
        data={filteredIcons}
        renderItem={IconRenderer}
        keyExtractor={item => item.uuid}
      />
      {searchTitle && (
        <Text style={{ ...styles.text, ...(textStyle as {}) }}>
          {searchTitle}
        </Text>
      )}
      <TextInput
        style={{ ...styles.input, ...(textInputStyle as {}) }}
        onChangeText={setSearch}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        value={search}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 17
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'relative'
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 15
  },
  badge: {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export default NativeModules.IconPickerModule
