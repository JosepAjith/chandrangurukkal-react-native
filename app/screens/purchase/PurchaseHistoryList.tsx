import React, {useEffect, useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {fetchPurchaseList} from '../../api/purchase/PurchaseListSlice';

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
const Data = [
  {
    AppointmentId: 1,
    Status: 'Completed',
    PurchasedItemName: 'Sample Item',
    AppointmentDate: '2024-05-22',
    AppointmentTime: '10:00 AM',
    BranchName: 'Branch A',
    ItemDetails: [
      {
        ProductId: 101,
        ProductName: 'Product A',
        ProductType: 'Type A',
        SalesId: 987654321,
        ImgUrl: 'https://example.com/imageA.jpg',
      },
      {
        ProductId: 102,
        ProductName: 'Product B',
        ProductType: 'Type B',
        SalesId: 987654322,
        ImgUrl: 'https://example.com/imageB.jpg',
      },
    ],
  },
  {
    AppointmentId: 2,
    Status: 'Pending',
    PurchasedItemName: 'Another Sample Item',
    AppointmentDate: '2024-05-23',
    AppointmentTime: '11:00 AM',
    BranchName: 'Branch B',
    ItemDetails: [
      {
        ProductId: 103,
        ProductName: 'Product C',
        ProductType: 'Type C',
        SalesId: 987654323,
        ImgUrl: 'https://example.com/imageC.jpg',
      },
    ],
  },
];

const PurchaseHistoryList: React.FC<Props> = () => {
  const navigation = useNavigation<PurchaseHistoryListNavigationProps>();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {purchases, loadingPurchases, purchaseError} = useSelector(
    (state: RootState) => state.PurchaseList,
  );
  const {PatientId} = useSelector((state: RootState) => state.GlobalVariables);

  // useEffect(() => {
  //   dispatch(
  //     fetchPurchaseList({
  //       uri: `GetPurchaseList?composite={"PatientId":"${PatientId}"}`,
  //     }),
  //   );
  // }, []);

  return (
    <View flex>
      <Header onPress={() => navigation.goBack()} color={'black'} />

      <View flex paddingH-20>
        <Text style={styles.heading}>Purchase History</Text>

        <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteNames.PurchaseHistoryDetails)
                }>
                <View style={styles.cardView}>
                  <Image
                    source={
                      item.ItemDetails
                        ? {uri: item.ItemDetails[0].ImgUrl}
                        : AppImages.NULLIMAGE
                    }
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={styles.chip}>
                    <View style={styles.smallView}>
                      <Text style={styles.statusText}>{item.Status}</Text>
                    </View>
                  </View>

                  <View padding-15>
                    <Text style={styles.title}>{item.PurchasedItemName}</Text>

                    <View row marginT-10 centerV>
                      <Text style={styles.text}>{item.AppointmentDate}</Text>
                      <View style={styles.line} />
                      <Text style={styles.text}>{item.AppointmentTime}</Text>
                      <View style={styles.line} />
                      <Text style={styles.text}>{item.BranchName}</Text>
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
