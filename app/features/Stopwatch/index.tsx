import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from '../../utils/ThemeManager'

interface StopWatchProps {
    theme: any
}
const Stopwatch = (props: StopWatchProps) => {
    const { theme } = props
    return (
        <View style={[styles.container, { backgroundColor: theme.shark }]}>
            <Text>Stopwatch </Text>
        </View>
    )
}

export default withTheme(Stopwatch)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})