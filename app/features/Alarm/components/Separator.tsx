import React from 'react'
import { View, StyleSheet } from 'react-native'


const Separator = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 0,
        width: "80%",
        borderTopWidth: 2,
        borderColor: "black",
        margin: 20
    },
})

export default Separator
