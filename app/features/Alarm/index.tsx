import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '../../Config/Icons';
import { withTheme } from "../../utils/ThemeManager"

interface AlarmProps {
    theme: any
}

const Alarm = (props: AlarmProps) => {
    const { theme } = props
    return (

        <View style={[styles.container, { backgroundColor: theme.shark }]}>
            <Text>Alarm</Text>
        </View>
    )
}

export default withTheme(Alarm)

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})