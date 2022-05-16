import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BtnComponent = (props) => {

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={props.action}>
          <Text style={styles.textButton}>Retour Home</Text>
      </TouchableOpacity>
    </>
  )
}

export default BtnComponent

const styles = StyleSheet.create({
    button : {
        height : '50px',
        width : '60%',
        backgroundColor : 'green',
    },
    textButton : {
        color : 'white',
        margin : 'auto',
        fontSize : '1.3rem'
    }
})