import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {Animated, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import CommonButton from '../../components/CommonButton';
import { Easing } from 'react-native-reanimated';

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

const ScheduleAppointment: React.FC<Props> = () => {
  const navigation = useNavigation<ScheduleAppointmentNavigationProps>();
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [animatedHeight] = useState(new Animated.Value(0));

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
    if (!isDatePickerVisible) {
      Animated.timing(animatedHeight, {
        toValue: 200, // adjust the height as per your requirement
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View flex paddingV-20>
      <HomeHeader
        leftIcon={AppImages.LEFT}
        onPress={() => navigation.goBack()}
      />

      <View flex margin-20 marginB-60>
        <Text style={styles.heading}>Schedule Your Appointment</Text>

        <Text style={styles.subHeading}>
          Select a date, time and preferred location for your appointment
        </Text>
        <View flex>
        <TouchableOpacity style={styles.rectangle} onPress={toggleDatePicker}>
            <View flex left centerV>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>DD/MM/YYYY</Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.CALENDAR} />
            </View>
          </TouchableOpacity>

          <View style={styles.rectangle}>
            <View flex left centerV>
              <Text style={styles.label}>Time</Text>
              <Text style={styles.value}>Select a time</Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.CLOCK} />
            </View>
          </View>

          <View style={styles.rectangle}>
            <View flex left centerV>
              <Text style={styles.label}>Branch</Text>
              <Text style={styles.value}>Select a branch</Text>
            </View>
            <View flex right centerV>
              <Image source={AppImages.DOWN} />
            </View>
          </View>
        </View>

        <CommonButton title="Continue" onPress={() => {navigation.navigate(RouteNames.ConfirmAppointment)}} />
    
       {/* <Animated.View style={[ { height: animatedHeight }]}>
        <CommonButton title="Close" onPress={toggleDatePicker} />
      </Animated.View> */}
      </View>

    
    </View>
  );
};
export default ScheduleAppointment;
