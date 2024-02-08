import React, {useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../navigation';
import AppImages from '../../constants/AppImages';
import styles from './styles';
import AppColors from '../../constants/AppColors';
import CommonButton from '../../components/CommonButton';
import Header from '../../components/Header';

const {TextField} = Incubator;

export type PasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'PasswordScreen'
>;

export type PasswordScreenRouteProps = RouteProp<RootStackParams, 'PasswordScreen'>;

interface Props {}

const PasswordScreen: React.FC<Props> = () => {
  const navigation = useNavigation<PasswordScreenNavigationProps>();

  return (
    <View style={styles.container} paddingV-20>
       <Header onPress={()=>{}}/>
        <Text style={styles.title}>Enter password</Text>
        <Text style={styles.text}>Use your password to login to your existing account</Text>

        <TextField
          placeholder={'Password'}
          placeholderTextColor={AppColors.gray}
          fieldStyle={styles.fieldStyle}
          paddingH-15
          marginB-15
        />

        <CommonButton title={'Login'} onPress={() => {}} />

        <Text>Forgot your password?</Text>

    </View>
  );
};
export default PasswordScreen;