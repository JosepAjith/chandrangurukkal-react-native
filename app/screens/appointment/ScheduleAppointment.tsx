import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
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

  const CalendarClose = () => {
    setCalendarOpen(false);
  };

  const TimeClose = () => {
    setTimeOpen(false);
  };

  return (
    <View flex paddingV-20 backgroundColor={AppColors.white}>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />

      <View flex margin-20>
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
              <Text style={styles.value}>DD/MM/YYYY</Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.CALENDAR} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rectangle}
            onPress={() => setTimeOpen(!timeOpen)}>
            <View flex left centerV>
              <Text style={styles.label}>Time</Text>
              <Text style={styles.value}>Select a time</Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.CLOCK} />
            </View>
          </TouchableOpacity>

          {status == 'appoint' && (
            <View style={styles.rectangle}>
              <View flex left centerV>
                <Text style={styles.label}>Branch</Text>
                <Text style={styles.value}>Select a branch</Text>
              </View>
              <View flex right centerV>
                <Image source={AppImages.DOWN} />
              </View>
            </View>
          )}
        </View>

        <CommonButton
          title="Continue"
          onPress={() => {
            navigation.navigate(RouteNames.ConfirmAppointment);
          }}
        />
      </View>
      {calendarOpen && <CalendarSheet close={CalendarClose} />}

      {timeOpen && <TimeSheet close={TimeClose} />}
    </View>
  );
};
export default ScheduleAppointment;
