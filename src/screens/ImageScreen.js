import { View, Text } from 'react-native'
import React from 'react'
import ImageComponent from '../components/ImageComponent'
import Favicon from '../../assets/favicon.png'

const ImageScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageComponent source={Favicon} />
    </View>
  )
}

export default ImageScreen