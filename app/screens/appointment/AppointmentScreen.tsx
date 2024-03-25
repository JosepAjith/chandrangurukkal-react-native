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
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {RootState} from '../../../store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchServiceList} from '../../api/service/ServiceListSlice';
import {fetchPackageList} from '../../api/package/PackageListSlice';
import BackgroundLoader from '../../components/BackgroundLoader';
import {showToast} from '../../constants/commonUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStrings from '../../constants/AppStrings';

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
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {packages, loadingPackages, packageError} = useSelector(
    (state: RootState) => state.PackageList,
  );
  const {services, loadingServices, serviceError} = useSelector(
    (state: RootState) => state.ServiceList,
  );
  const {RequestedServicesOrPackages} = useSelector(
    (state: RootState) => state.AppointRequest,
  );

  useFocusEffect(
    React.useCallback(() => {
      const companyId = '1';

      const fetchPackagesPromise = dispatch(
        fetchPackageList({
          uri: `GetAllPackages?composite={"CompanyID":"${companyId}"}`,
        }),
      );
      const fetchServicesPromise = dispatch(
        fetchServiceList({
          uri: `GetAllServices?composite={"CompanyID":"${companyId}"}`,
        }),
      );

      Promise.all([fetchPackagesPromise, fetchServicesPromise]).then(() => {
        // Both requests are complete
      });

      return () => {
        // Cleanup if needed
      };
    }, []),
  );

  const toggleSelection = (id: number, name: string) => {
    const isSelected = RequestedServicesOrPackages.some(
      (item: {ProductId: number}) => item.ProductId === id,
    );

    // Dispatch action to update the state
    dispatch({
      type: 'SET_REQUESTED_SERVICES_OR_PACKAGES',
      payload: isSelected
        ? RequestedServicesOrPackages.filter(
            (item: {ProductId: number}) => item.ProductId !== id,
          )
        : [...RequestedServicesOrPackages, {ProductId: id, ProductName: name}],
    });
  };

  const Continue = async () => {

      navigation.navigate(RouteNames.ScheduleAppointment, {
        status: 'appoint',
      });
  }

  return (
    <View flex paddingV-20>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />
      {loadingPackages && loadingServices && <BackgroundLoader />}

      <View flex margin-20 marginB-60>
        <Text style={styles.heading}>Book An Appointment</Text>

        <Text style={styles.subHeading}>
          Select the service or package that you need an appointment for
        </Text>
        <FlatList
          data={[
            ...(packages?.GetAllPackagesResult?.Data || []), // Add null check for packages
            ...(services?.GetAllServicesResult?.Data || []), // Add null check for services
          ]}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item, index}) => {
            const isEvenIndex = index % 2 === 0;
            const alignmentStyle = isEvenIndex ? 'flex-start' : 'flex-end';
            let title = '';
            let id = 0;

            if ('PackageName' in item) {
              title = item.PackageName;
            } else if ('ServiceName' in item) {
              title = item.ServiceName;
            }

            if ('PackageId' in item) {
              id = item.PackageId;
            } else if ('ServiceId' in item) {
              id = item.ServiceId;
            }
            return (
              <View style={{alignItems: alignmentStyle, flex: 1}}>
                <Pressable onPress={() => toggleSelection(id, title)}>
                  <ImageBackground
                    source={
                      item.ImgUrl ? {uri: item.ImgUrl} : AppImages.SERVICE
                    }
                    style={[styles.itemView, {width: itemWidth}]}
                    imageStyle={{borderRadius: 5}}>
                    {RequestedServicesOrPackages.some(
                      (selectedItem: {ProductId: number}) =>
                        selectedItem.ProductId === id,
                    ) && (
                      <View style={styles.chip}>
                        <Image source={AppImages.ROUND} />
                      </View>
                    )}

                    <Text style={styles.title}>{title}</Text>
                  </ImageBackground>
                </Pressable>
              </View>
            );
          }}
        />

        <CommonButton
          title="Continue"
          onPress={() => {
            if (RequestedServicesOrPackages.length == 0) {
              showToast('Select any services or packages to continue');
            } else {
             Continue()
            }
          }}
        />
      </View>
    </View>
  );
};
export default AppointmentScreen;
