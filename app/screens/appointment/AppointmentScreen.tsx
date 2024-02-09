import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const {TextField} = Incubator;

export type AppointmentScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'AppointmentScreen'
>;

export type AppointmentScreenRouteProps = RouteProp<RootStackParams, 'AppointmentScreen'>;

interface Props {}

const AppointmentScreen: React.FC<Props> = () => {
  const navigation = useNavigation<AppointmentScreenNavigationProps>();

  return (
    <View flex center>
        <Text>Appointment screen</Text>
    </View>
  );
};
export default AppointmentScreen;
