import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native-ui-lib';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  Modal,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParams, RouteNames} from '../../navigation';
import HomeScreen from '../home/HomeScreen';
import AppointmentScreen from '../appointment/AppointmentScreen';
import CallBackScreen from '../callback/CallBackScreen';
import AppImages from '../../constants/AppImages';
import AppColors from '../../constants/AppColors';
import AppFonts from '../../constants/AppFonts';

const Tab = createBottomTabNavigator();

export type BottomTabsNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'BottomTabs'
>;

export type BottomTabsRouteProps = RouteProp<RootStackParams, 'BottomTabs'>;

interface Props {}

const BottomTabs: React.FC<Props> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
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
                  style={[
                    styles.text,
                    {color: focused ? AppColors.green : AppColors.greyBlack},
                  ]}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentScreen}
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
                  style={[
                    styles.text,
                    {color: focused ? AppColors.green : AppColors.greyBlack},
                  ]}>
                  Appointment
                </Text>
              </View>
            ),
          }}
        />

        {/* <Tab.Screen
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
      /> */}
        <Tab.Screen
          name="Callback"
          listeners={{
            tabPress: e => {
              e.preventDefault(); // Prevent the default action
              toggleModal(); // Open the modal
            },
          }}
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
                  style={[
                    styles.text,
                    {color: focused ? AppColors.green : AppColors.greyBlack},
                  ]}>
                  Callback
                </Text>
              </View>
            ),
          }}>
          {() => null}
        </Tab.Screen>
      </Tab.Navigator>

      {/* Modal for Callback */}

      <CallBackScreen
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.LATO_REGULAR,
    fontSize: 12,
    textAlign: 'center',
  }
});
