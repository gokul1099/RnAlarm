import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from "../../utils/ThemeManager"
interface ClockProps {
    theme: any
}
const Clock = (props: ClockProps) => {
    const { theme } = props
    return (
        <View style={[styles.container, { backgroundColor: theme.shark }]}>
            <Text>Clock

            </Text>
        </View>
    )
}

export default withTheme(Clock)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})