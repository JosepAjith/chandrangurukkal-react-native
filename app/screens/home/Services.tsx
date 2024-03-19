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
    // const {services, loadingServices, serviceError} = useSelector(
    //   (state: RootState) => state.ServiceList,
    // );
  
  
    useFocusEffect(
      React.useCallback(() => {
        let companyId = '1';
      
        dispatch(fetchServiceList({uri: `GetAllServices?composite={"CompanyID":"${companyId}"}`}));
  
        return () => {
          
        };
      }, []),
    );
    const [services, setServices] = useState([
        {id: 1, image: AppImages.SHIRO, title: 'Shirovasti'},
        {id: 2, image: AppImages.ABHYA, title: 'Abhyanga'},
        {id: 3, image: AppImages.NASYAM, title: 'Nasyam'},
        {id: 4, image: AppImages.KIZHI, title: 'Kizhi'},
        {id: 5, image: AppImages.SHIRO, title: 'Tharpanam'},
        {id: 6, image: AppImages.ABHYA, title: 'Pizhichil'},
        {id: 7, image: AppImages.NASYAM, title: 'Shirodhara'},
        {id: 8, image: AppImages.KIZHI, title: 'Tharpanam'},
        {id: 9, image: AppImages.SHIRO, title: 'Shirovasti'},
        {id: 10, image: AppImages.ABHYA, title: 'Abhyanga'},
        {id: 11, image: AppImages.NASYAM, title: 'Nasyam'},
        {id: 12, image: AppImages.KIZHI, title: 'Kizhi'},
        {id: 13, image: AppImages.SHIRO, title: 'Tharpanam'},
        {id: 14, image: AppImages.ABHYA, title: 'Pizhichil'},
        {id: 15, image: AppImages.NASYAM, title: 'Shirodhara'},
      ]);
  return (
    <GridList
    listPadding={20}
    data={services}
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
            <Image source={item.image} width={70} height={70} />
            <Text style={styles.serviceText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }}
  />
  );
};

export default Services;

