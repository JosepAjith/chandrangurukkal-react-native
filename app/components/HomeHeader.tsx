import React from 'react';
import {Image, View} from 'react-native-ui-lib';
import AppImages from '../constants/AppImages';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {}

const HomeHeader = ({}: Props) => {
    const navigation = useNavigation();
  return (
    <View row paddingH-20>
      <View flex left>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={AppImages.MENU} width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View flex row right>
        <Image source={AppImages.BELL} width={20} height={20} marginR-10 />
        <Image source={AppImages.PROF} width={20} height={20} />
      </View>
    </View>
  );
};

export default HomeHeader;
