import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native-ui-lib';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './style';
import AppImages from '../../constants/AppImages';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { useFocusEffect } from '@react-navigation/native';
import { fetchPackageList } from '../../api/package/PackageListSlice';

interface Props {}

const Packages = ({}: Props) => {
  const [packages, setPackages] = useState([
    {id: 1, image: AppImages.SERVICE, title: 'Body Rejuvenation Package'},
    {id: 2, image: AppImages.SERVICE, title: 'Body Detox Package'},
    {id: 3, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 4, image: AppImages.SERVICE, title: 'One Year Package'},
  ]);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  // const {packages, loadingPackages, packageError} = useSelector(
  //   (state: RootState) => state.PackageList,
  // );


  useFocusEffect(
    React.useCallback(() => {
      let companyId = '1';
      
      dispatch(fetchPackageList({uri: `GetAllPackages?composite={"CompanyID":"${companyId}"}`}));

      return () => {
        
      };
    }, []),
  );
  return (
    <>
      {packages.map((item, index) => (
        <View key={index} marginT-10 marginR-10>
          <ImageBackground
            source={item.image}
            style={{width: 330, height: 180}}
            imageStyle={{borderRadius: 10}}>
            <View flex bottom marginH-20 marginB-20>
              <Text style={styles.packageText}>{item.title}</Text>
              <View row marginT-20>
                <View style={styles.smallView}>
                  <Text style={styles.priceText}>AED 2500</Text>
                </View>

                <View marginL-5 style={styles.smallView}>
                  <Text style={styles.priceText}>10 - 15 days</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </>
  );
};

export default Packages;
