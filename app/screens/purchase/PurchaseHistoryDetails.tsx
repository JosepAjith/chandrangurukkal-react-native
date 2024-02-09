import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {styles} from './styles';
import AppImages from '../../constants/AppImages';
import {FlatList, ImageBackground} from 'react-native';
import CommonButton from '../../components/CommonButton';

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

  return (
    <View flex>
      <ImageBackground
        source={AppImages.PURCHASEIMG}
        style={{padding: 20, height: 340}}>
        <Header onPress={() => navigation.goBack()} />
      </ImageBackground>

      <View flex padding-20>
        <View>
            <Text>Purchase Details</Text>

            <View>
                <Text></Text>
            </View>
        </View>
        <CommonButton title="Download Invoice" onPress={() => {}} />
      </View>
    </View>
  );
};
export default PurchaseHistoryDetails;
