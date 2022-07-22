import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { useSharedValue } from "react-native-reanimated"
import SelectorItem from "./SelectorItem"

interface TimeSelectorProp {
    theme: any,
    setVisible: any
}

const TimeSelector = ({ theme, setVisible }: TimeSelectorProp) => {
    const styles = Styles(theme)
    const scaleValue = useSharedValue(0)
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const minutes = new Array(60).fill(10)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Animated.FlatList data={hours}
                        renderItem={({ item, index }) => (<SelectorItem index={index} item={item} scaleValue={scaleValue} />)}
                        keyExtractor={(index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View style={styles.pickerContainer}>
                    <Animated.FlatList data={hours}
                        renderItem={({ item, index }) => (<SelectorItem index={index} item={item} scaleValue={scaleValue} />)}
                        keyExtractor={(index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false} />
                </View>

            </View>
            {/* <View style={styles.modalBtnContainer}>
                <TouchableHighlight style={styles.modalBtn} underlayColor={"white"} onPress={() => setVisible()}><Text>Cancel</Text></TouchableHighlight>
                <TouchableHighlight style={styles.modalBtn} underlayColor={"white"} onPress={() => setVisible()}><Text>Ok</Text></TouchableHighlight>
            </View> */}
        </>
    )
}

export default TimeSelector

const Styles = (theme: any) => StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    pickerContainer: {
        width: hp(20),
        height: hp(30),
        justifyContent: "center",
        alignItems: "center"
    },
    modalBtnContainer: {
        flexDirection: "row",
    },
    modalBtn: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20
    },
})