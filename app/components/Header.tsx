import React from 'react';
import {Image, View} from 'react-native-ui-lib';
import AppImages from '../constants/AppImages';
import {TouchableOpacity} from 'react-native';

interface Props {
  onPress: any;
  color: any;
}

const Header = ({onPress, color}: Props) => {
  return (
    <View row backgroundColor="transparent">
      <View flex left >
        <TouchableOpacity onPress={onPress}>
        <View style={{padding: 20}}>
          <Image
            source={AppImages.LEFT}
            tintColor={color}
          />
          </View>
        </TouchableOpacity>
      </View>

      <View flex right></View>
    </View>
  );
};

export default Header;
