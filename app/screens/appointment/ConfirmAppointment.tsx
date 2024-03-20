import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import CommonButton from '../../components/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const {TextField} = Incubator;

export type ConfirmAppointmentNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'ConfirmAppointment'
>;

export type ConfirmAppointmentRouteProps = RouteProp<
  RootStackParams,
  'ConfirmAppointment'
>;

interface Props {}

const ConfirmAppointment: React.FC<Props> = () => {
  const navigation = useNavigation<ConfirmAppointmentNavigationProps>();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {bookAppointmentData, loadingBookAppointment, bookAppointmentError} = useSelector(
    (state: RootState) => state.BookAppointment,
  );

  return (
    <View flex paddingV-20>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />

      <View flex margin-20>
        <Text style={styles.heading}>Confirm Appointment?</Text>

        <Text style={styles.subHeading}>
          Please review your selections and confirm your appointment
        </Text>

        <View flex>
        <View style={styles.cardView}>
            <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
              <Image source={AppImages.CARDLOGO} />
            </View>

            <Text style={styles.details}>Appointment Details</Text>
            <View marginT-10>
                <Text style={styles.text}>Date</Text>
                <Text style={styles.text1}>February 17,2024</Text>
            </View>

            <View marginT-10>
                <Text style={styles.text}>Time</Text>
                <Text style={styles.text1}>04:00 PM</Text>
            </View>

            <View marginT-10>
                <Text style={styles.text}>Branch</Text>
                <Text style={styles.text1}>Dubai Healthcare Centre</Text>
            </View>

            <View marginT-10>
                <Text style={styles.text}>Services / Packages</Text>
                <Text style={styles.text1}>Kizhi, Nasyam</Text>
            </View>
          </View>
        </View>

        <CommonButton
          title="Book Appointment"
          onPress={() =>{}}
        />
      </View>
    </View>
  );
};
export default ConfirmAppointment;
