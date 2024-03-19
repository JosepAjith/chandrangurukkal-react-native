import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {Dimensions, FlatList, ImageBackground, Pressable} from 'react-native';
import CommonButton from '../../components/CommonButton';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceList } from '../../api/service/ServiceListSlice';
import { fetchPackageList } from '../../api/package/PackageListSlice';

const {TextField} = Incubator;

export type AppointmentScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'AppointmentScreen'
>;

export type AppointmentScreenRouteProps = RouteProp<
  RootStackParams,
  'AppointmentScreen'
>;

interface Props {}

const AppointmentScreen: React.FC<Props> = () => {
  const navigation = useNavigation<AppointmentScreenNavigationProps>();
  const windowWidth = Dimensions.get('window').width;
  const itemWidth = (windowWidth - 50) / 2;
  const [packages, setPackages] = useState([
    {id: 1, image: AppImages.SERVICE, title: 'Body Rejuvenation Package'},
    {id: 2, image: AppImages.SERVICE, title: 'Body Detox Package'},
    {id: 3, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 4, image: AppImages.SERVICE, title: 'One Year Package'},
    {id: 5, image: AppImages.SERVICE, title: 'Six Months Package'},
    {id: 6, image: AppImages.SERVICE, title: 'ShiroVasti'},
    {id: 7, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 8, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 9, image: AppImages.SERVICE, title: 'ShiroVasti'},
    {id: 10, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 11, image: AppImages.SERVICE, title: 'Weight Loss Package'},

  ]);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  // const {packages, loadingPackages, packageError} = useSelector(
  //   (state: RootState) => state.PackageList,
  // );
  // const {services, loadingServices, serviceError} = useSelector(
  //   (state: RootState) => state.ServiceList,
  // );

  useFocusEffect(
    React.useCallback(() => {
      const companyId = '1';

      const fetchPackagesPromise = dispatch(
        fetchPackageList({uri: `GetAllPackages?composite={"CompanyID":"${companyId}"}` }),
      );
      const fetchServicesPromise = dispatch(
        fetchServiceList({uri: `GetAllServices?composite={"CompanyID":"${companyId}"}` }),
      );

      Promise.all([fetchPackagesPromise, fetchServicesPromise]).then(() => {
        // Both requests are complete
      });

      return () => {
        // Cleanup if needed
      };
    }, []),
  );

  return (
    <View flex paddingV-20>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />

      <View flex margin-20 marginB-60>
        <Text style={styles.heading}>Book An Appointment</Text>

        <Text style={styles.subHeading}>
          Select the service or package that you need an appointment for
        </Text>
        <FlatList
        // data={[...packages, ...services]} // Combine packages and services
          data={packages}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item, index}) => {
            const isEvenIndex = index % 2 === 0;
            const alignmentStyle = isEvenIndex ? 'flex-start' : 'flex-end';
            return (
              <View style={{ alignItems: alignmentStyle, flex:1 }}>
              <ImageBackground
                source={item.image}
                style={[styles.itemView,{width: itemWidth}]}
                imageStyle={{borderRadius: 5}}>
                  <Pressable style={styles.chip}>
                    <Image source={AppImages.ROUND}/>
                  </Pressable>
                <Text style={styles.title}>{item.title}</Text>
              </ImageBackground>
              </View>
            );
          }}
        />

        <CommonButton title="Continue" onPress={() => navigation.navigate(RouteNames.ScheduleAppointment,{status:'appoint'})} />
      </View>
    </View>
  );
};
export default AppointmentScreen;