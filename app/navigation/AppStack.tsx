import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RouteNames } from './Routes';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import PasswordScreen from '../screens/login/PasswordScreen';
import GuestLogin from '../screens/login/GuestLogin';

const Stack = createNativeStackNavigator();



const AppStack = () => {

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animationTypeForReplace: 'pop',
      animation: 'slide_from_right',
      animationDuration: 1000,
    }}>
        <Stack.Screen name={RouteNames.WelcomeScreen} component={WelcomeScreen}/>
        <Stack.Screen name={RouteNames.LoginScreen} component={LoginScreen}/>
        <Stack.Screen name={RouteNames.PasswordScreen} component={PasswordScreen}/>
        <Stack.Screen name={RouteNames.GuestLogin} component={GuestLogin}/>
     
    </Stack.Navigator>
  );
};


export default AppStack;
