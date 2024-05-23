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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const PackageId = 399;

  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Kizhi',
      subTitle: 'Appointment scheduled on March 15, 2024',
      status: false,
    },
    {
      id: 2,
      title: 'Nasyam',
      subTitle: 'Click here to schedule an appointment',
      status: true,
    },
    {
      id: 3,
      title: 'Siroshtra',
      subTitle: 'Click here to schedule an appointment',
      status: true,
    },
  ]);

  const [detail, setDetail] = useState([
    {
      id: 1,
      title: 'Kizhi',
      subTitle: 'Appointment scheduled on March 15, 2024',
      status: false,
    },
  ]);

  const handleSelect = (id: number, status: boolean) => {
    if (status) {
      setSelectedIds(prevSelectedIds =>
        prevSelectedIds.includes(id)
          ? prevSelectedIds.filter(selectedId => selectedId !== id)
          : [...prevSelectedIds, id],
      );
    }
  };

  return (
    <View flex backgroundColor={AppColors.whitish}>
      <ImageBackground source={AppImages.PURCHASEIMG} style={{height: 340}}>
        <Header onPress={() => navigation.goBack()} color={'white'} />
        <View flex bottom padding-20>
          <Text style={[styles.statusText, {fontSize: 24}]}>
          Body Rejuvenation Package
          </Text>
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
            data={services}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleSelect(item.id, item.status)}
                  disabled={!item.status}>
                  <View style={styles.innerView}>
                    {selectedIds.includes(item.id) && (
                      <View absT absR margin-15>
                        <Image source={AppImages.ROUND} />
                      </View>
                    )}
                    <Text style={styles.subText}>{item.title}</Text>
                    <Text style={styles.subText1}>{item.subTitle}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {selectedIds.length != 0 && (
          <CommonButton
            title="Continue"
            onPress={() => {
              navigation.navigate(RouteNames.ScheduleAppointment);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default PurchaseHistoryDetails;
