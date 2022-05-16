import { Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageComponent = (props) => {

    return (
    <>
        <Image style={styles.image} source={{ uri : props.source }} />
    </>
    )
}

export default ImageComponent


const styles = StyleSheet.create({
    image : {
        width : '100px',
        height : '100px'
    }
})