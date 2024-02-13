import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import CommonButton from '../../components/CommonButton';
import AppColors from '../../constants/AppColors';

const {TextField} = Incubator;

export type PurchaseHistoryDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'PurchaseHistoryDetails'
>;

export type PurchaseHistoryDetailsRouteProps = RouteProp<
  RootStackParams,
  'PurchaseHistoryDetails'
>;

interface Props {}

const PurchaseHistoryDetails: React.FC<Props> = () => {
  const navigation = useNavigation<PurchaseHistoryDetailsNavigationProps>();
  const [details, setDetails] = useState([
    {
      id: 1,
      title: 'Body Rejuvenation Package',
      subTitle: 'Appointment scheduled on March 15, 2024',
      status: false,
    },
    {
      id: 2,
      title: 'Body Detox Package',
      subTitle: 'Click here to schedule an appointment',
      status: true,
    },
    {
      id: 3,
      title: 'Weight Loss Package',
      subTitle: 'Appointment scheduled on April 15, 2024',
      status: false,
    },
    {
      id: 4,
      title: 'One Year Package',
      subTitle: 'Appointment scheduled on March 15, 2024',
      status: false,
    },
  ]);

  return (
    <View flex backgroundColor={AppColors.whitish}>
      <ImageBackground
        source={AppImages.PURCHASEIMG}
        style={{padding: 20, height: 340}}>
        <Header onPress={() => navigation.goBack()}  color={'white'}/>
        <View flex bottom>
          <Text style={[styles.statusText,{fontSize:24}]}>Kizhi, Nasyam, Body Detox Package</Text>
          <View row marginT-20>
                        <View style={styles.smallView}>
                          <Text style={styles.priceText}>Upcoming</Text>
                        </View>

                        <View marginL-5 style={styles.smallView}>
                          <Text style={styles.priceText}>Dubai HealthCare City</Text>
                        </View>
                      </View>
        </View>
      </ImageBackground>

      <View flex padding-20>
        <View flex style={styles.detailsView}>
          <Text style={styles.subHeading}>Purchase Details</Text>

          <FlatList
            data={details}
            renderItem={({item}) => {
              return (
                <View style={styles.innerView}>
                  <Text style={styles.subText}>{item.title}</Text>
                  {item.status ? (
                    <TouchableOpacity onPress={()=>navigation.navigate(RouteNames.ScheduleAppointment,{status:'purchase'})}>
                      <Text style={styles.subText1}>{item.subTitle}</Text>
                    </TouchableOpacity>
                  ) : (
                    <Text style={styles.subText1}>{item.subTitle}</Text>
                  )}
                </View>
              );
            }}
          />
        </View>
        <CommonButton title="Continue" onPress={() => {}} />
      </View>
    </View>
  );
};
export default PurchaseHistoryDetails;
