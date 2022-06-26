import React from "react"
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from "../utils/TabIcon";
import useGetTheme from '../hooks/useGetTheme';
import { getHeaderTitle } from '@react-navigation/elements';
import TabHeader from "../utils/TabHeader";
/**   importing all the Screens **/
import Alarm from '../features/Alarm';
import Clock from '../features/Clock';
import Timer from '../features/Timer';
import Stopwatch from '../features/Stopwatch';
import Bedtime from '../features/Bedtime';


interface Route {
    name: String
}

const Tab = createBottomTabNavigator();

export const Navigator = () => {
    const theme = useGetTheme()
    const tabBarStyle = {
        height: 70, backgroundColor:
            theme.outer_space
    }
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false, tabBarStyle, header: ({ navigation, options, route }) => {
                    const title = getHeaderTitle(options, route)
                    return <TabHeader title={title?.name} />
                }
            }} >
                <Tab.Screen name="Alarm" component={Alarm} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'alarm'} active={focused} /> } }} />
                <Tab.Screen name="Clock" component={Clock} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'clock-outline'} active={focused} /> } }} />
                <Tab.Screen name="Timer" component={Timer} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'timer-sand'} active={focused} /> } }} />
                <Tab.Screen name="Stop Watch" component={Stopwatch} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'timer-outline'} active={focused} /> } }} />
                <Tab.Screen name="Bed Time" component={Bedtime} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'bed'} active={focused} /> } }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

