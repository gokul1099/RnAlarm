import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from "react-native-reanimated"
import Icons from '../Config/Icons';
import Ripple from '../components/Ripple';

interface Props {
    name: String,
    active: Boolean,
}

const TabIcon: React.FC<Props> = props => {
    const { name, active } = props
    console.log(active, name)
    return (
        <View style={[styles.container, { backgroundColor: active ? "black" : "#fff" }]}>
            <Ripple style={styles.ripple} active={active}>
                <Icons type="materialCommunity" name={name} color={active ? "#fff" : "red"} size={30} />
            </Ripple>
        </View>
    )
}

TabIcon.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginVertical: 15,
        width: 70,
        borderRadius: 20
    },
    ripple: {
        justifyContent: "center",
        alignItems: "center"
    }

})

export default TabIcon
