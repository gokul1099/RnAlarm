import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated'
interface SelectorItemProp {
    index: number,
    item: number,
    scaleValue: Animated.SharedValue<number>
}
const SelectorItem = ({ index, item, scaleValue }: SelectorItemProp) => {
    console.log(scaleValue)
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(scaleValue.value,
            [index - 1, index, index + 1],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP)
        return { transform: [{ scale }] }
    })
    return (
        <Animated.View style={[animatedStyle]}>
            <Text style={{ fontSize: 50 }}>{item}</Text>
        </Animated.View>
    )
}

export default SelectorItem

const styles = StyleSheet.create({})