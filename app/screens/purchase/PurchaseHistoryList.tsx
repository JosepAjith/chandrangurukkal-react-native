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

const {TextField} = Incubator;

export type PurchaseHistoryListNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'PurchaseHistoryList'
>;

export type PurchaseHistoryListRouteProps = RouteProp<
  RootStackParams,
  'PurchaseHistoryList'
>;

interface Props {}

const PurchaseHistoryList: React.FC<Props> = () => {
  const navigation = useNavigation<PurchaseHistoryListNavigationProps>();
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      image: AppImages.PURCHASEIMG,
      title: 'Body Rejuvenation Package',
      status: 'Upcoming',
    },
    {
      id: 2,
      image: AppImages.PURCHASEIMG,
      title: 'Body Detox Package',
      status: 'Ongoing',
    },
    {
      id: 3,
      image: AppImages.PURCHASEIMG,
      title: 'Weight Loss Package',
      status: 'Complete',
    },
    {
      id: 4,
      image: AppImages.PURCHASEIMG,
      title: 'One Year Package',
      status: 'Ongoing',
    },
  ]);

  return (
    <View flex padding-20>
      <Header onPress={() => navigation.goBack()}  color={'black'}/>

      <View flex marginT-20>
        <Text style={styles.heading}>Purchase History</Text>

        <FlatList
          data={purchases}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate(RouteNames.PurchaseHistoryDetails)}>
              <View style={styles.cardView}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.chip}>
                  <View style={styles.smallView}>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                </View>

                <View padding-15>
                <Text style={styles.title}>{item.title}</Text>

                <View row marginT-10 centerV>
                  <Text style={styles.text}>February 25,2024</Text>
                  <View style={styles.line}/>
                  <Text style={styles.text}> 05:00 PM</Text>
                  <View style={styles.line}/>
                  <Text style={styles.text}>Bangalore</Text>
                  </View>

                </View>
              </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default PurchaseHistoryList;
