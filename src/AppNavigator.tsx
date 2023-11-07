import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PinLockScreen from './PinLockScreen';
import MainScreen from './MainScreen';
import NumberKeyBoard from './NumberKeyBoard';
import Test from './Test';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NumberKeyBoard">
        {/* <Stack.Screen name="PinLockScreen" component={PinLockScreen} /> */}
        <Stack.Screen name="NumberKeyBoard" component={NumberKeyBoard} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
