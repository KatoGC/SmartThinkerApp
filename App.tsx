import React from 'react';
import {NavigationContainer, NavigationProp, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './app/src/components/Login';
import SplashScreen from './app/src/components/SplashScreen';
import SingUp from './app/src/components/SingUp';

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  SingUp: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
