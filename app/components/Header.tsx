import React from 'react';
import {Image, View} from 'react-native-ui-lib';
import AppImages from '../constants/AppImages';

interface Props {
  onPress: any;
}

const Header = ({onPress}: Props) => {
  return (
    <View row backgroundColor="transparent">
      <View flex left>
        <Image
          source={AppImages.LEFT}
          width={24}
          height={24}
          tintColor="black"
        />
      </View>

      <View flex right>
      </View>
    </View>
  );
};

export default Header;
