import { View, Text } from 'react-native'
import BtnComponent from '../components/BtnComponent'
import React from 'react'

const CalendarScreen = (props) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>En cours de réalisation</Text>
      <BtnComponent action={() => props.navigation.navigate('Home') }/>
    </View>
  )
}

export default CalendarScreen