import { View, Text } from 'react-native'
import TextComponent from '../components/TextComponent'
import React from 'react'

const HomeScreen = (props) => {

  console.log(props)

  console.log(props.navigation.isFocused())
  
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextComponent />
    </View>
  )
}

export default HomeScreen