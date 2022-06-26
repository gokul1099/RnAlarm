import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from '../../utils/ThemeManager'

interface BedTimeProps {
    theme: any
}
const Bedtime = (props: BedTimeProps) => {
    const { theme } = props
    return (
        <View style={[styles.container, { backgroundColor: theme.shark }]}>
            <Text>Bedtime

            </Text>
        </View>
    )
}

export default withTheme(Bedtime)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})