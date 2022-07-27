import { StyleSheet, Dimensions, Animated, View } from 'react-native'
import React from 'react'

interface SelectorItemProp {
    data: any,
    scrollY: any,
    selected: any
}
const { width, height } = Dimensions.get("window")
const ITEM_SIZE = height * 0.09
const SelectorItem = ({ data, scrollY, selected }: SelectorItemProp) => {

    return (
        <Animated.FlatList
            data={data}
            // horizontal={true}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            snapToInterval={ITEM_SIZE}
            onMomentumScrollEnd={event => {
                const index = Math.round(event.nativeEvent.contentOffset.y / ITEM_SIZE)
                selected(data[index])
            }}
            contentContainerStyle={{ paddingVertical: ITEM_SIZE }}
            showsVerticalScrollIndicator={false}
            renderItem={({ index, item }) => {
                const inputRange = [
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                    (index + 1) * ITEM_SIZE
                ]
                const opacity = scrollY.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4]
                })
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5]
                })

                return (
                    <Animated.View style={{ height: ITEM_SIZE, justifyContent: "center", alignItems: "center", opacity }}>
                        <Animated.Text style={[styles.text, { transform: [{ scale }] }]}>{item <= 9 ? `0${item}` : item}</Animated.Text>
                    </Animated.View>
                )
            }}
        />

    )
}

export default SelectorItem

const styles = StyleSheet.create({
    text: {
        fontSize: ITEM_SIZE * 0.8,
        color: "black"
    },
    container: {
        height: ITEM_SIZE,
        width: ITEM_SIZE,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 5
    }
})