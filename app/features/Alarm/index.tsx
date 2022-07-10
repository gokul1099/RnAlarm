import { StyleSheet, Text, View, Modal, TouchableHighlight, FlatList } from 'react-native';
import React from 'react'
import { withTheme } from "../../utils/ThemeManager"
import Expand from './components/Expand';
import { Transition, Transitioning, TransitioningView } from "react-native-reanimated"
import useToggle from '../../hooks/useToggle';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ModalDisplay from './components/ModalDisplay';
interface AlarmProps {
    theme: any
}
const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
)

const Alarm = (props: AlarmProps) => {
    const { theme } = props
    const styles = Styles(theme)
    const [currentIndex, setCurrentIndex] = React.useState<any>(null)
    const ref = React.useRef<TransitioningView | null>()
    const [modalShow, setModalShow] = useToggle()
    const updateState = (index: any, currentIndex: any) => {
        ref.current?.animateNextTransition()
        setCurrentIndex(index === currentIndex ? null : index)
    }
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (

        <Transitioning.View ref={ref} style={[styles.container, { backgroundColor: theme.shark }]} transition={transition}>
            <ModalDisplay visible={modalShow} setVisible={() => setModalShow()} theme={theme} />
            <Text style={{ color: "#fff" }}>Alarm</Text>

            <FlatList data={data}
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({ item, index }) => {
                    return (<View key={index} >
                        <Expand time="6:20 am" toggle={true} theme={theme} index={index} currentIndex={currentIndex} updateState={() => updateState(index, currentIndex)} toggleModal={setModalShow} />
                    </View>)
                }} />
            <TouchableHighlight style={styles.floatingButton}
                activeOpacity={0.6}
                underlayColor={theme.rolling_stone}
                onPress={() => console.log('Pressed!')}
            >

                <Text style={styles.addBtnText}>+</Text>
            </TouchableHighlight>

        </Transitioning.View>
    )
}

export default withTheme(Alarm)

const Styles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingButton: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        backgroundColor: theme.polo_blue,
        position: "absolute",
        bottom: 0,
        left: wp(35),
        alignItems: "center",
        justifyContent: "center"
    },
    addBtnText: {
        fontSize: 40,
        color: theme.white
    }
})