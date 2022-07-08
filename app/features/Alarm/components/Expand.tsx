import { StyleSheet, Switch, Text, View, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from '../../../Config/Icons';
import useToggle from '../../../hooks/useToggle';

interface ExpandProps {
    time?: string,
    toggle?: boolean,
    theme: any,
    index: number,
    currentIndex: number | null,
    updateState: Function

}

const Expand = ({ time, toggle, theme, index, currentIndex, updateState }: ExpandProps) => {
    const styles = Styles(theme)
    const [btn, ToggleBtn] = useToggle(toggle)
    const [expand, ToggleExpand] = useToggle()
    return (
        // <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <TouchableOpacity style={[styles.container]} onPress={() => {
            ToggleExpand()
            updateState()
        }}
            activeOpacity={1}>
            {/* <View style={styles.container}> */}
            <View style={styles.innerContainer}>
                <Text style={styles.text1}>{time}</Text>
                <Pressable onPress={ToggleExpand} style={styles.expandBtn}>
                    <Icons name={expand ? "chevron-up" : "chevron-down"} color="gray" type="materialCommunity" size={20} />
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Evvery day</Text>
                <Switch trackColor={{ false: theme.rolling_stone, true: theme.polo_blue }}
                    thumbColor={theme.white}
                    onValueChange={ToggleBtn}
                    value={btn} />
            </View>
            {
                index === currentIndex && (
                    <View style={styles.expandContainer}>
                    </View>
                )
            }
            {/* </View> */}

        </TouchableOpacity>

        // </TapGestureHandler > 
    )
}

export default Expand

const Styles = (theme: any) => StyleSheet.create({
    container: {
        justifyContent: "center",
        // height: hp(20),
        // width: wp(95),
        backgroundColor: theme.rolling_stone,
        margin: 10,
        borderRadius: 20,
        flexGrow: 1
    },
    text1: {
        fontSize: 40,
        color: theme.white
    },
    text: {
        color: theme.white
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 5
    },
    expandBtn: {
        backgroundColor: theme.white,
        width: 25,
        height: 25,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    expandContainer: {
        backgroundColor: theme.rolling_stone,
        height: 50,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    }
})