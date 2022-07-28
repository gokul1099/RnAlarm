import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TimeSelector from './TimeSelector/TimeSelector';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Separator from './Separator';
import { scheduleAlarm } from "../../../utils/AlarmManager"

interface ModalProp {
    visible: boolean,
    theme: object,
    setVisible: Function
}


const ModalDisplay = ({ visible, theme, setVisible }: ModalProp) => {
    const styles = Styles(theme)

    const today = new Date()
    const [date, setDate] = useState<string>(today.toISOString().split('T')[0])
    const alarm = {
        alarm_time: "20:46:00",
        alarm_title: 'title',
        alarm_text: 'text',
        alarm_sound: '',
        alarm_icon: '',
        alarm_sound_loop: true,
        alarm_vibration: true,
        alarm_noti_removable: true,
        alarm_activate: true
    };

    return (
        <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => setVisible()} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* <SelectDate title='Date' setInput={setDate} /> */}
                    <Separator />
                    <View style={styles.timeTitle}>
                        <Text style={styles.title}>At what time you want set Alarm? </Text>
                    </View>
                    <Separator />
                    <TimeSelector theme={theme} setVisible={setVisible} />
                    <TouchableOpacity style={styles.button} onPress={() => scheduleAlarm(alarm)}>
                        <Text style={styles.title}>Set Alarm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDisplay

const Styles = (theme: any) => StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "black",
        fontSize: 25,
        textTransform: "capitalize",
        textAlign: "center",
        fontWeight: "bold"

    },
    timeTitle: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    modalView: {
        backgroundColor: "white",//theme.rolling_stone,
        borderRadius: 20,
        alignItems: "center",

        shadowOffset: {
            width: 0,
            height: 2
        },
        height: hp(60),
        width: wp(90),
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    button: {
        width: "80%",
        height: 60,
        backgroundColor: "red",
        marginHorizontal: 10,
        marginVertical: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
})