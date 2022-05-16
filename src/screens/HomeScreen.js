import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = (props) => {

    console.log(props)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen