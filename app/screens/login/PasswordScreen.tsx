import React, {useEffect, useState} from 'react';
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
import {TouchableOpacity} from 'react-native';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { createLogin, reset } from '../../api/login/LoginCreateSlice';
import { showToast } from '../../constants/commonUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStrings from '../../constants/AppStrings';

const {TextField} = Incubator;

export type PasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'PasswordScreen'
>;

export type PasswordScreenRouteProps = RouteProp<
  RootStackParams,
  'PasswordScreen'
>;

interface Props {}

const PasswordScreen: React.FC<Props> = ({route}: any) => {
  const navigation = useNavigation<PasswordScreenNavigationProps>();
  const userId = route.params.userId;
  const [password, setPassword] = useState('');
  const [invalidPass, setInvalidPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {LoginData, loadingLogin, LoginError} = useSelector(
    (state: RootState) => state.loginCreate,
  );

  function Validate() {
    if (password == '') {
      setInvalidPass(true);
      return false;
    }
    return true;
  }

  const Login = async () => {
    dispatch(createLogin({uri: `CustomerLogin?composite={"UserId":"${userId}","Password":"${password}"}`}))
      .then(() => {
        dispatch(reset());
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    if (LoginData != null) {
      if (!loadingLogin && !LoginError && !LoginData.CustomerLoginResult.Error) {
        showToast(LoginData.CustomerLoginResult.Message);
        AsyncStorage.setItem(
          AppStrings.ACCESS_TOKEN,
          LoginData.CustomerLoginResult.Tocken == null ? '' : LoginData.CustomerLoginResult.Tocken,
        );
        AsyncStorage.setItem(
          AppStrings.PATIENT_ID,
          LoginData.CustomerLoginResult.PatientId == null ? '' : String(LoginData.CustomerLoginResult.PatientId),
        );
        navigation.navigate(RouteNames.Dashboard);
      } else {
        showToast(LoginData.CustomerLoginResult.Message);
      }
    }
  }, [LoginData]);

  return (
    <View style={styles.container} paddingV-20>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        color={'black'}
      />
      <View flex marginT-30>
        <Text style={styles.title1}>Enter password</Text>
        <Text style={styles.text}>
          Use your password to login to your existing account
        </Text>

        <TextField
          placeholder={'Password'}
          placeholderTextColor={AppColors.gray}
          fieldStyle={styles.fieldStyle}
          paddingH-15
          marginB-15
          marginT-30
          secureTextEntry={!showPass}
          trailingAccessory={
            <View row center>
              <Text marginR-10 red10>
                {invalidPass ? '*Required' : ''}
              </Text>
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                {showPass ? (
                  <Image source={AppImages.EYECLOSE} width={23} height={15} />
                ) : (
                  <Image source={AppImages.EYE} />
                )}
              </TouchableOpacity>
            </View>
          }
          onChangeText={(text: any) => {
            setPassword(text);
            setInvalidPass(false);
          }}
        />

        <CommonButton
          title={'Login'}
          onPress={() => {
            if (Validate()) {
              Login();
            }
          }}
        />

        <Text style={styles.fgtPass}>Forgot your password?</Text>
      </View>
    </View>
  );
};
export default PasswordScreen;
