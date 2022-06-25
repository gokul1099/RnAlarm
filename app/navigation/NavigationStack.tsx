import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from "../utils/TabIcon";

/**   importing all the Screens **/
import Alarm from '../features/Alarm';
import Clock from '../features/Clock';
import Timer from '../features/Timer';
import Stopwatch from '../features/Stopwatch';
import Bedtime from '../features/Bedtime';
import Icons from "../Config/Icons";

interface Route {
    name: String
}

const Tab = createBottomTabNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 70 } }} >
                <Tab.Screen name="Alarm" component={Alarm} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'alarm'} active={focused} /> } }} />
                <Tab.Screen name="Clock" component={Clock} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'clock-outline'} active={focused} /> } }} />
                <Tab.Screen name="Timer" component={Timer} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'timer-sand'} active={focused} /> } }} />
                <Tab.Screen name="Stopwatch" component={Stopwatch} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'timer-outline'} active={focused} /> } }} />
                <Tab.Screen name="BedTime" component={Bedtime} options={{ tabBarIcon: ({ focused }) => { return <TabIcon name={'bed'} active={focused} /> } }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

