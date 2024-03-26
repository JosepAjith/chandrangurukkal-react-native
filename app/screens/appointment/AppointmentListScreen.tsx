import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {styles} from './styles';
import {FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchAppointmentList } from '../../api/appointment/AppointmentListSlice';
import AppColors from '../../constants/AppColors';

const {TextField} = Incubator;

export type AppointmentListScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'AppointmentListScreen'
>;

export type AppointmentListScreenRouteProps = RouteProp<
  RootStackParams,
  'AppointmentListScreen'
>;

interface Props {}

const AppointmentListScreen: React.FC<Props> = () => {
  const navigation = useNavigation<AppointmentListScreenNavigationProps>();
  const {PatientId} = useSelector(
    (state: RootState) => state.GlobalVariables,
  );
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {appointments, loadingAppointments, appointmentError} = useSelector(
    (state: RootState) => state.AppointmentList,
  );

  useFocusEffect(
    React.useCallback(() => {
    
      dispatch(fetchAppointmentList({uri: `GetAllAppointmentRequests?composite={"PatientId":"${PatientId}"}`}));

      return () => {
        
      };
    }, []),
  );

  return (
    <View flex padding-20>
      <Header onPress={() => navigation.goBack()}  color={'black'}/>

      <View flex marginT-20>
        <Text style={styles.heading}>My Bookings</Text>

        <FlatList
          data={appointments?.GetAllAppointmentRequestsResult.Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.cardView1}>
                {/* <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.chip}>
                  <View style={styles.smallView}>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                </View> */}

                <View padding-15>
                <Text style={[styles.title,{color:AppColors.green}]}>Request No :  {item.AppointmentRequestNo}</Text>

                <View marginT-10 centerV>
                  <Text style={styles.text}>Request Date :  {item.RequestedDate}</Text>
                  <Text style={styles.text} marginV-10>Request Time :  {item.RequestedTime}</Text>
                  <Text style={[styles.text]}>Request Branch :  {item.RequestedBranchName}</Text>
                  </View>

                  <Text marginT-10 style={[styles.title,{color:AppColors.greyBlack,fontSize:16}]}>Status :  {item.IsConfirmed ? 'Booking Confirmed' : 'Booking Pending'}</Text>

                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default AppointmentListScreen;
