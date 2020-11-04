import React, { FC, PropsWithChildren, ReactElement, SyntheticEvent } from 'react'
import { StyleSheet, Text, View, Dimensions, GestureResponderEvent } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type ButtonOnePropType = {
  bgColor: string
  borderColor: string
  textColor?: string
  onClick: (e: GestureResponderEvent) => void
} & PropsWithChildren<unknown>

export const ButtonOne: FC<ButtonOnePropType> = (props): ReactElement => {
  const textColor = props.textColor || 'rgb(8, 218, 95)'

  return (
    <TouchableOpacity
      onPress={props.onClick}
      activeOpacity={0.7}
      style={{
        ...styles.headerButton,
        backgroundColor: props.bgColor,
        borderColor: props.borderColor,
      }}
    >
      <View>
        <Text style={{ ...styles.customBtnText, color: textColor }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginHorizontal: 5,
    borderWidth: 2,
    height: 55,
    borderRadius: 50,
    minWidth: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
  customBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
