import { rootGreenColor } from '@/constants'
import React, { Component, ReactElement } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackArrow } from '@/components/BackArrow/BackArrow'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { UserAddPhoto } from '@/components/UserAddPhoto'
import { CustomTextInput } from '@/components/CustomTextInput/CustomTextInput'
import { ButtonOne } from '@/components/ButtonOne/ButtonOne'

const Header = (props: SignUpScreenPropType) => {
  return (
    <View style={styles.header}>
      <View>
        <BackArrow
          onClick={() => {
            props.navigation.goBack()
          }}
        />
      </View>
      <View style={{ left: '50%', position: 'absolute', transform: [{ translateX: -40 }] }}>
        <Text style={{ fontSize: 22, color: 'white' }}>Register</Text>
      </View>
    </View>
  )
}

type SignUpScreenPropType = {
  navigation: NavigationProp<ParamListBase>
}

export default class SignUpScreen extends Component<SignUpScreenPropType> {
  constructor(props: SignUpScreenPropType) {
    super(props)
  }

  render(): ReactElement {
    return (
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={styles.addPhotos}>
          <UserAddPhoto />
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.inputTitle}>Full Name</Text>
          <CustomTextInput placeholder="Your Full Name" />

          <Text style={styles.inputTitle}>Birthay</Text>
          <CustomTextInput placeholder="dd/mm/yy" />

          <Text style={styles.inputTitle}>Email</Text>
          <CustomTextInput placeholder="Your Email" />

          <Text style={styles.inputTitle}>Phone Number</Text>
          <CustomTextInput placeholder="Your Phone Number" />

          <Text style={styles.inputTitle}>Location/Adress</Text>
          <CustomTextInput placeholder="Your Location" />
          <View style={{ marginTop: 25 }} />
          <ButtonOne
            textColor="white"
            fullWidth
            bgColor={rootGreenColor}
            borderColor={rootGreenColor}
            onClick={() => {}}
          >
            Next
          </ButtonOne>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: rootGreenColor,
    justifyContent: 'center',
  },
  addPhotos: {
    alignItems: 'center',
    margin: 25,
    marginBottom: 10,
  },
  inputsContainer: {
    padding: Dimensions.get('screen').width * 0.05,
  },
  inputTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
    marginTop: 25,
    color: 'rgb(70, 70, 70)',
  },
})