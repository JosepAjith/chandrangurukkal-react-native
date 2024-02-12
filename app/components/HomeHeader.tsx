import React from 'react';
import {Image, View} from 'react-native-ui-lib';
import AppImages from '../constants/AppImages';
import {TouchableOpacity} from 'react-native';

interface Props {
  leftIcon: any;
  onPress? : any;
}

const HomeHeader = ({leftIcon,onPress}: Props) => {
  return (
    <View row paddingH-20>
      <View flex left>
        <TouchableOpacity onPress={onPress}>
          <Image source={leftIcon}/>
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
