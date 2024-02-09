import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const {TextField} = Incubator;

export type CallBackScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'CallBackScreen'
>;

export type CallBackScreenRouteProps = RouteProp<RootStackParams, 'CallBackScreen'>;

interface Props {}

const CallBackScreen: React.FC<Props> = () => {
  const navigation = useNavigation<CallBackScreenNavigationProps>();

  return (
    <View flex center>
        <Text>Callback screen</Text>
    </View>
  );
};
export default CallBackScreen;
