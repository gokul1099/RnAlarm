import { Pressable, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
interface TimeSelectorProp {
    theme: any,
    setVisible: any
}
const TimeSelector = ({ theme, setVisible }: TimeSelectorProp) => {
    const styles = Styles(theme)
    const date = new Date()
    const [hours, setHours] = useState<string>()
    const [minutes, setMinues] = useState<string>()
    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} value={hours} placeholder={(date.getHours() % 12 || 12).toString()} onChangeText={(text) => {
                        if (parseInt(text) < 12) { setHours(text) }
                    }} />
                </View>
                <Text>:</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} value={minutes} placeholder={(date.getMinutes().toString())} onChangeText={(text) => {
                        if (parseInt(text) <= 60) {
                            setMinues(text)
                        }
                    }} />
                </View>
                <View>
                    <View style={styles.meridiemContainer}>
                        <Pressable style={[styles.mBtn, { borderTopRightRadius: 5, borderTopLeftRadius: 5 }]}><Text>Am</Text></Pressable>
                        <Pressable style={[styles.mBtn, { borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }]}><Text>Am</Text></Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.modalBtnContainer}>
                <TouchableHighlight style={styles.modalBtn} underlayColor={"white"} onPress={() => setVisible()}><Text>Cancel</Text></TouchableHighlight>
                <TouchableHighlight style={styles.modalBtn} underlayColor={"white"} onPress={() => setVisible()}><Text>Ok</Text></TouchableHighlight>
            </View>

        </>
    )
}

export default TimeSelector

const Styles = (theme: any) => StyleSheet.create({
    container: {
        height: hp(20),
        width: wp(50),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',

    },
    modalBtnContainer: {
        flexDirection: "row",
    },
    modalBtn: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20
    },
    input: {
        fontSize: 30,
        textAlign: "center"
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: theme.white,
        height: hp(10),
        width: wp(13),
        margin: 10,
    },
    meridiemContainer: {
        flexDirection: "column"
    },
    mBtn: {
        borderWidth: 1,
        borderColor: theme.white,
        width: wp(9),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center"
    }
})