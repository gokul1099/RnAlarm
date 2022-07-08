/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Text } from "react-native"
import Navigator from './app/navigation';
import Alarm from "./app/features/Alarm"
import { ThemeContextProvider } from "./app/utils/ThemeManager"
const App = () => {

  return (
    <ThemeContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <Navigator /> */}
        <Alarm />
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
};


export default App;
