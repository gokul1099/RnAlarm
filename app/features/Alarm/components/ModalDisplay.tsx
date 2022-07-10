import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native'
import React from 'react'
import TimeSelector from './TimeSelector';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface ModalProp {
    visible: boolean,
    theme: object,
    setVisible: Function
}
const ModalDisplay = ({ visible, theme, setVisible }: ModalProp) => {
    const styles = Styles(theme)

    return (
        <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => setVisible()} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TimeSelector theme={theme} setVisible={setVisible} />
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

    modalView: {
        backgroundColor: theme.rolling_stone,
        borderRadius: 20,
        alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        height: hp(30),
        width: wp(70),
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})