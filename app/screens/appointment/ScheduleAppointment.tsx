import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Incubator,
  Picker,
  Text,
  View,
} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {
  Animated,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import {Easing} from 'react-native-reanimated';
import CalendarSheet from './CalendarSheet';
import AppColors from '../../constants/AppColors';
import TimeSheet from './TimeSheet';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {RootState} from '../../../store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBranchList} from '../../api/branch/BranchListSlice';
import {formatTime, getUserDate, showToast} from '../../constants/commonUtils';
import {
  requestAppointment,
  requestAppointmentReset,
} from '../../api/appointment/RequestAppointmentSlice';

const {TextField} = Incubator;

export type ScheduleAppointmentNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'ScheduleAppointment'
>;

export type ScheduleAppointmentRouteProps = RouteProp<
  RootStackParams,
  'ScheduleAppointment'
>;

interface Props {}

const ScheduleAppointment: React.FC<Props> = ({route}: any) => {
  const navigation = useNavigation<ScheduleAppointmentNavigationProps>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const status = route.params.status;
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {branches, loadingBranches, branchError} = useSelector(
    (state: RootState) => state.BranchList,
  );
  const {
    requestAppointmentData,
    loadingRequestAppointment,
    requestAppointmentError,
  } = useSelector((state: RootState) => state.RequestAppointment);
  const {
    RequestedDate,
    RequestedBranch,
    RequestedTime,
    RequestedServicesOrPackages,
  } = useSelector((state: RootState) => state.AppointRequest);
  const {PatientId} = useSelector((state: RootState) => state.GlobalVariables);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchBranchList({uri: `GetAllBranches`}));

      return () => {};
    }, []),
  );

  const CalendarClose = () => {
    setCalendarOpen(false);
  };

  const TimeClose = () => {
    setTimeOpen(false);
  };

  function Validate() {
    if (RequestedDate == '') {
      showToast('Date Required');
      return false;
    }
    if (RequestedBranch.Id == 0) {
      showToast('Branch Required');
      return false;
    }
    if (RequestedTime == '') {
      showToast('Time Required');
      return false;
    }
    return true;
  }

  const Request = async () => {
    const productIds = RequestedServicesOrPackages.map(
      (item: {ProductId: any}) => ({ProductId: item.ProductId}),
    );
    let composite = {
      PatientId: PatientId,
      RequestedBranch: RequestedBranch.Id,
      RequestedDate: RequestedDate,
      RequestedTime: RequestedTime,
      RequestedServicesOrPackages: productIds,
    };
    dispatch(
      requestAppointment({
        uri: `RequestAppointment?composite=${JSON.stringify(composite)}`,
      }),
    )
      .then(() => {
        dispatch(requestAppointmentReset());
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    if (requestAppointmentData != null) {
      if (
        !loadingRequestAppointment &&
        !requestAppointmentError &&
        requestAppointmentData.RequestAppointmentResult.AppointmentRequestNo
      ) {
        showToast(requestAppointmentData.RequestAppointmentResult.Message);
        dispatch({
          type: 'SET_REQUEST_ID',
          payload:
            requestAppointmentData.RequestAppointmentResult
              .AppointmentRequestId,
        });
        navigation.replace(RouteNames.ConfirmRequest, {
          requestNo:
            requestAppointmentData.RequestAppointmentResult
              .AppointmentRequestNo,
        });
      } else {
        showToast(requestAppointmentData.RequestAppointmentResult.Message);
      }
    }
  }, [requestAppointmentData]);

  return (
    <View flex backgroundColor={AppColors.white}>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />

      <View flex marginH-20 marginB-20>
        <Text style={styles.heading}>Schedule Your Appointment</Text>

        {status == 'purchase' ? (
          <Text style={styles.subHeading}>
            Select a date and time for your appointment
          </Text>
        ) : (
          <Text style={styles.subHeading}>
            Select a date, time and preferred location for your appointment
          </Text>
        )}
        <View flex>
          <TouchableOpacity
            style={styles.rectangle}
            onPress={() => setCalendarOpen(!calendarOpen)}>
            <View flex left centerV>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>
                {RequestedDate ? getUserDate(RequestedDate) : 'DD/MM/YYYY'}
              </Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.CALENDAR} />
            </View>
          </TouchableOpacity>

          {status == 'appoint' && (
            <View>
              <View absT marginH-20 style={{top: 30, zIndex: 2}}>
                <Text style={styles.label}>Branch</Text>
              </View>
              <Picker
                key={RequestedBranch.Id}
                placeholder="Select a branch"
                placeholderTextColor={'grey'}
                fieldStyle={styles.rectangle}
                color={'black'}
                style={[styles.value, {top: 5}]}
                trailingAccessory={
                  <View>
                    <Image source={AppImages.DOWN} />
                  </View>
                }
                value={RequestedBranch.Id}
                onChange={itemId => {
                  const selectedBranch =
                    branches?.GetAllBranchesResult.Data.find(
                      branch => branch.CompanyId === itemId,
                    );
                  if (selectedBranch) {
                    dispatch({
                      type: 'SET_REQUESTED_BRANCH',
                      payload: {
                        Id: selectedBranch.CompanyId,
                        name: selectedBranch.CompanyName,
                      },
                    });
                  }
                }}>
                {branches?.GetAllBranchesResult.Data.map((item, index) => (
                  <Picker.Item
                    key={index}
                    value={item.CompanyId}
                    label={item.CompanyName}
                  />
                ))}
              </Picker>
            </View>
          )}

          {status == 'appoint' && RequestedBranch.Id != 0 && (
            <TouchableOpacity
              style={styles.rectangle}
              onPress={() => setTimeOpen(!timeOpen)}>
              <View flex left centerV>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>
                  {RequestedTime ? formatTime(RequestedTime) : 'Select a time'}
                </Text>
              </View>
              <View flex right centerV>
                <Image source={AppImages.CLOCK} />
              </View>
            </TouchableOpacity>
          )}
        </View>

        <CommonButton
          title="Continue"
          onPress={() => {
            if (Validate()) {
              Request();
            }
          }}
        />
      </View>
      {calendarOpen && <CalendarSheet close={CalendarClose} />}

      {timeOpen && <TimeSheet close={TimeClose} comp_Id={RequestedBranch.Id} />}
    </View>
  );
};
export default ScheduleAppointment;
