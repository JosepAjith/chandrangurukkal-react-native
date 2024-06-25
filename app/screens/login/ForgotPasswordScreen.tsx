import React, {useEffect, useState} from 'react';
import {Button, Image, Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Header from '../../components/Header';
import AppColors from '../../constants/AppColors';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { createForgotPassword, reset } from '../../api/forgotPassword/ForgotPasswordSlice';
import { showToast } from '../../constants/commonUtils';
import CommonButton from '../../components/CommonButton';
import BackgroundLoader from '../../components/BackgroundLoader';

const {TextField} = Incubator;

export type ForgotPasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'ForgotPasswordScreen'
>;

export type ForgotPasswordScreenRouteProps = RouteProp<
  RootStackParams,
  'ForgotPasswordScreen'
>;

interface Props {}

const ForgotPasswordScreen: React.FC<Props> = ({route}: any) => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProps>();
  const [userId, setUserId] = useState('');
  const [InvalidId, setInvalidId] = useState(false);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const {ForgotPasswordData, loadingForgotPassword, ForgotPasswordError} = useSelector(
    (state: RootState) => state.ForgotPassword,
  );

  function Validate() {
    if (userId == '') {
      setInvalidId(true);
      return false;
    }
    return true;
  }

  const ForgotPassword = async () => {
    if (!Validate()) return;
    dispatch(
      createForgotPassword({
        uri: `GetForgottenCredentials?composite={"UserId":"${userId}"}`,
      }),
    )
      .then(() => {
        dispatch(reset());
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    if (ForgotPasswordData != null) {
      if (
        !loadingForgotPassword &&
        !ForgotPasswordError &&
        !ForgotPasswordData.SaveForgotPasswordDetailsResult.Error
      ) {
        showToast(ForgotPasswordData.SaveForgotPasswordDetailsResult.Message);
      } else {
        showToast(ForgotPasswordData.SaveForgotPasswordDetailsResult.Message);
      }
    }
  }, [ForgotPasswordData]);

  return (
    <View flex backgroundColor='white'>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        color={'black'}
      />

{loadingForgotPassword && <BackgroundLoader />}

      <View flex padding-20>
        <Text style={styles.title1}>Forgot password</Text>
        <Text style={styles.text}>
          Enter your userId to set your password.
        </Text>

        <TextField
          placeholder={'User ID'}
          placeholderTextColor={AppColors.gray}
          fieldStyle={styles.fieldStyle}
          paddingH-15
          marginV-20
          onChangeText={text => {
            setUserId(text);
            setInvalidId(false);
          }}
          trailingAccessory={
            <View>{InvalidId && <Text red10>*Required</Text>}</View>
          }
        />

<CommonButton title={'Continue'} onPress={ForgotPassword} />

      </View>
    </View>
  );
};
export default ForgotPasswordScreen;
