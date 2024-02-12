import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native-ui-lib';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PermissionsAndroid,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParams, RouteNames} from '../../navigation';
import HomeScreen from '../home/HomeScreen';
import AppointmentScreen from '../appointment/AppointmentScreen';
import CallBackScreen from '../callback/CallBackScreen';
import AppImages from '../../constants/AppImages';
import AppColors from '../../constants/AppColors';
import AppFonts from '../../constants/AppFonts';
import ScheduleAppointment from '../appointment/ScheduleAppointment';
import ConfirmAppointment from '../appointment/ConfirmAppointment';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type BottomTabsNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'BottomTabs'
>;

export type BottomTabsRouteProps = RouteProp<RootStackParams, 'BottomTabs'>;

interface Props {}

const BottomTabs: React.FC<Props> = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 65,
          backgroundColor: AppColors.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View center>
              <Image
                source={AppImages.HOME}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? AppColors.green : AppColors.greyBlack,
                }}
              />
              <Text
               style={[styles.text,{color: focused ? AppColors.green : AppColors.greyBlack}]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({focused}) => (
            <View center>
              <Image
                source={AppImages.APPOINTMENT}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? AppColors.green : AppColors.greyBlack,
                }}
              />
              <Text
               style={[styles.text,{color: focused ? AppColors.green : AppColors.greyBlack}]}>
                Appointment
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Callback"
        component={CallBackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View center>
              <Image
                source={AppImages.CALLBACK}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? AppColors.green : AppColors.greyBlack,
                }}
              />
              <Text
                style={[styles.text,{color: focused ? AppColors.green : AppColors.greyBlack}]}>
                Callback
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const Appointment = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
        animation: 'slide_from_right',
        animationDuration: 1000,
      }}>
      <Stack.Screen name={RouteNames.AppointmentScreen} component={AppointmentScreen} />
      <Stack.Screen name={RouteNames.ScheduleAppointment} component={ScheduleAppointment} />
      <Stack.Screen name={RouteNames.ConfirmAppointment} component={ConfirmAppointment} />
    </Stack.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  text:{
    fontFamily: AppFonts.LATO_REGULAR,
    fontSize: 12,
    textAlign: 'center'
  }
})
