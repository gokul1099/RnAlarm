import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '../../Config/Icons';

interface AlarmProps {
    theme: any
}

const Alarm = (props: AlarmProps) => {
    const { theme } = props
    console.log(theme, "theme")
    return (
        <View>
            <Text>Alarm</Text>
        </View>
    )
}

export default Alarm

const styles = StyleSheet.create({})