import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface InputProp {
    title: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
}
const SelectDate = ({ title, setInput }: InputProp) => {
    const today = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [currDate, setCurrDate] = useState(today.toLocaleDateString("en-us", options))
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.input}>{currDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        justifyContent: 'center',
        marginTop: 30
    },
    title: {
        color: "black"
    },
    input: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"

    }
})

export default SelectDate
