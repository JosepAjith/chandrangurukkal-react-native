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
import ButtonView from '../../components/ButtonView';
import { ScrollView } from 'react-native';

const {TextField} = Incubator;

export type LoginScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'LoginScreen'
>;

export type LoginScreenRouteProps = RouteProp<RootStackParams, 'LoginScreen'>;

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const [userId, setUserId] = useState('');
  const [InvalidId, setInvalidId] = useState(false);

  function Validate() {
    if(userId == ''){
      setInvalidId(true);
      return false;
    }
    return true;
  }

  return (
    <View style={styles.container}>
      
    
      <View style={styles.logoContainer}>
        <Image source={AppImages.LOGO} width={113} height={113} />
      </View>

      <View flex centerH>
        <Text style={styles.title}>Login or Signup</Text>

        <TextField
          placeholder={'User ID'}
          placeholderTextColor={AppColors.gray}
          fieldStyle={styles.fieldStyle}
          paddingH-15
          marginB-15
          onChangeText={text => {
            setUserId(text);
            setInvalidId(false);
          }}
          trailingAccessory={
            <View>
              {InvalidId &&
              <Text red10>*Required</Text>}
            </View>
          }
        />

        <CommonButton
          title={'Continue'}
          onPress={() => {
            if (Validate()) {
              navigation.navigate(RouteNames.PasswordScreen,{userId:userId});
            }
           
          }}
        />

        <Text style={styles.or}>or</Text>

        <ButtonView
          title={'Guest Login'}
          source={AppImages.USER}
          onPress={() => {
            navigation.navigate(RouteNames.GuestLogin);
          }}
        />
      </View>
   
    

      <View style={styles.footer}>
        <Text style={styles.privacyPolicy}>
          By clicking on Continue you agree to Chandran Gurukal’s
        </Text>
        <Text style={styles.privacyPolicy}>
          <Text color={AppColors.green}>terms</Text> and{' '}
          <Text color={AppColors.green}>privacy policy</Text>
        </Text>
      </View>  
     
    </View>
  );
};
export default LoginScreen;
