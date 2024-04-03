import React, {useEffect, useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import CommonButton from '../../components/CommonButton';

const {TextField} = Incubator;

export type ConfirmRequestNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'ConfirmRequest'
>;

export type ConfirmRequestRouteProps = RouteProp<
  RootStackParams,
  'ConfirmRequest'
>;

interface Props {}

const ConfirmRequest: React.FC<Props> = ({route}: any) => {
  const navigation = useNavigation<ConfirmRequestNavigationProps>();

  setTimeout(async () => {
    navigation.navigate(RouteNames.AppointmentListScreen)
  }, 2000);

  return (
      <View flex margin-20>
      <Text style={styles.heading}>Request Confirmation</Text>

        <View flex>
        <View style={styles.cardView}>
           
                <Text style={styles.text1}>Your request {route.params.requestNo} has been successfully placed.</Text>
          </View>
        </View>

        <CommonButton
          title="Bookings"
        onPress={()=>navigation.navigate(RouteNames.AppointmentListScreen)}
        />
      </View>
  );
};
export default ConfirmRequest;
