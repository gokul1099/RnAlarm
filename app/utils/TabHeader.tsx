import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import useGetTheme from '../hooks/useGetTheme';

interface TabHeaderProps {
    title: String
}
const TabHeader = (props: TabHeaderProps) => {
    const { title } = props
    const theme = useGetTheme()
    return (
        <View style={[styles.container, { backgroundColor: theme.outer_space }]}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, { color: theme.white }]}>{title}</Text>
            </View>
            <View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: "center",
        flexDirection: "column"
    },
    textContainer: {
        marginLeft: 20,
        width: "50%"
    },
    text: {
        fontWeight: "400",
        fontSize: 25
    }
})
export default TabHeader