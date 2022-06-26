import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from '../../utils/ThemeManager'

interface TimerProps {
    theme: any
}
const Timer = (props: TimerProps) => {
    const { theme } = props
    return (
        <View style={[styles.container, { backgroundColor: theme.shark }]}>
            <Text>Timer</Text>
        </View>
    )
}

export default withTheme(Timer)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})