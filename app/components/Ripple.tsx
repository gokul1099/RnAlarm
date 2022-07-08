import React from 'react'
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native'
import { TapGestureHandler, TapGestureHandlerGestureEvent } from "react-native-gesture-handler"
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
interface RippleProp {
    style?: StyleProp<ViewStyle>,
    onTap?: () => void,
    active?: Boolean,
    children?: any

}
const Ripple = ({ style, onTap, children, active }: RippleProp) => {

    const scale = useSharedValue(0)
    const rippleOpacity = useSharedValue(1)
    const tapGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: (tapEvent) => {
            rippleOpacity.value = 1
            scale.value = 0
            scale.value = withTiming(1, { duration: 1000 })
        },
        onEnd: () => {
            rippleOpacity.value = withTiming(0)
        }
    })
    const rStyle = useAnimatedStyle(() => {
        const circleRadius = 70
        return {
            width: circleRadius,
            height: circleRadius,
            borderRadius: circleRadius,
            backgroundColor: "red",
            position: 'absolute',
            opacity: rippleOpacity.value,
            transform: [
                {
                    scale: scale.value
                }
            ]
        }
    })
    return (
        <TapGestureHandler onHandlerStateChange={tapGestureEvent}>
            <Animated.View style={style}>
                <View>{children}</View>
                <Animated.View style={rStyle} />
            </Animated.View>
        </TapGestureHandler>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default Ripple
