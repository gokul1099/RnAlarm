import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import { withTheme } from "../../utils/ThemeManager"
import Expand from './components/Expand';
import { Transition, Transitioning, TransitioningView } from "react-native-reanimated"
import useToggle from '../../hooks/useToggle';
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
    const [currentIndex, setCurrentIndex] = React.useState<any>(null)
    const ref = React.useRef<TransitioningView | null>()
    // const callAN
    const updateState = (index: any, currentIndex: any) => {
        ref.current?.animateNextTransition()
        setCurrentIndex(index === currentIndex ? null : index)
    }
    return (

        <Transitioning.View ref={ref} style={[styles.container, { backgroundColor: theme.shark }]} transition={transition}>
            <Text style={{ color: "#fff" }}>Alarm</Text>

            {
                [1, 2, 3, 4].map((item, index) => {
                    console.log("reder")
                    return (
                        <View key={index} >
                            <Expand time="6:20 am" toggle={true} theme={theme} index={index} currentIndex={currentIndex} updateState={() => updateState(index, currentIndex)} />
                        </View>
                    )
                })
            }
        </Transitioning.View>
    )
}

export default withTheme(Alarm)

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})