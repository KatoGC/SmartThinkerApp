import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './app/src/screens/Login';
import SplashScreen from './app/src/screens/SplashScreen';
import SignUp from './app/src/screens/SignUp';
import HomeScreen from './app/src/screens/HomeScreen';
import ActivitiesScreen from './app/src/screens/ActivitiesScreen';
import CoursesScreen from './app/src/screens/CoursesScreen';
import UserScreen from './app/src/screens/UserScreen';
import EditProfileScreen from './app/src/screens/EditProfileScreen';
import Notifications from './app/src/screens/Notifications';

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  HomeScreen: undefined;
  ActivitiesScreen: undefined;
  CoursesScreen: undefined;
  UserScreen: undefined;
  EditProfileScreen: undefined;
  Notifications: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

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
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActivitiesScreen"
          component={ActivitiesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CoursesScreen"
          component={CoursesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
