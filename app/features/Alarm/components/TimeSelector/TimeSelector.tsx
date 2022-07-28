import { StyleSheet, View, Dimensions, Animated, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SelectorItem from './SelectorItem';


interface TimeSelectorProp {
    theme: any,
    setVisible: any
}
const { width, height } = Dimensions.get("window")

const ITEM_SIZE = height * 0.09

const TimeSelector = ({ theme, setVisible }: TimeSelectorProp) => {
    const styles = Styles(theme)
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const minutes = new Array(60).fill(10)
    const meridiem = ["AM", "PM"]
    const scrollYHour = useRef(new Animated.Value(0)).current
    const scrollYMinute = useRef(new Animated.Value(0)).current
    const scrollYMeridium = useRef(new Animated.Value(0)).current
    const [selectedHour, setSelectedHour] = useState(hours[0])
    const [selectedMinute, setSelectedMinute] = useState(hours[0])
    const [selectedMeridiem, setSelectedMeridiem] = useState(new Date().getHours() < 12 ? "AM" : "PM")
    return (
        <View>
            <View style={styles.pickerContainer}>
                <View style={{ height: height * 0.25 }}>
                    <SelectorItem data={hours} scrollY={scrollYHour} selected={(val: number) => setSelectedHour(val)} />
                </View>
                <View style={{ height: height * 0.25, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 50, color: "black", paddingTop: 10 }}>:</Text>
                </View>
                <View style={{ height: height * 0.25 }}>
                    <SelectorItem data={hours} scrollY={scrollYMinute} selected={(val: number) => setSelectedMinute(val)} />
                </View>
                <View style={{ height: height * 0.25 }}>
                    <SelectorItem data={meridiem} scrollY={scrollYMeridium} selected={(val: string) => setSelectedMeridiem(val)} />
                </View>
            </View>
        </View>

    )
}

export default TimeSelector

const Styles = (theme: any) => StyleSheet.create({
    pickerContainer: {
        height: ITEM_SIZE * 3,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",

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