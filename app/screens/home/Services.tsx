import React, {useState} from 'react';
import {Button, GridList, Image, Text, View} from 'react-native-ui-lib';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './style';
import AppImages from '../../constants/AppImages';
import { RouteNames } from '../../navigation';
import { RootState } from '../../../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetchServiceList } from '../../api/service/ServiceListSlice';

interface Props {
    navigation : any;
}

const Services = ({navigation}: Props) => {
    const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
    const {services, loadingServices, serviceError} = useSelector(
      (state: RootState) => state.ServiceList,
    );
  
  
    useFocusEffect(
      React.useCallback(() => {
        let companyId = '1';
      
        dispatch(fetchServiceList({uri: `GetAllServices?composite={"CompanyID":"${companyId}"}`}));
  
        return () => {
          
        };
      }, []),
    );
  return (
    <GridList
    listPadding={20}
    data={services?.GetAllServicesResult.Data}
    numColumns={4}
    renderItem={({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(RouteNames.ScheduleAppointment, {
              status: 'appoint',
            })
          }>
          <View center>
            <Image source={item.ImgUrl? {uri:item.ImgUrl} : AppImages.SHIRO} width={70} height={70} style={{borderRadius:40}}/>
            <Text style={styles.serviceText}>{item.ServiceName}</Text>
          </View>
        </TouchableOpacity>
      );
    }}
  />
  );
};

export default Services;

