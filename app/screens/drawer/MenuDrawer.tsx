import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native-ui-lib';
import {TouchableOpacity, Switch, Share, Alert, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AppColors from '../../constants/AppColors';
import AppImages from '../../constants/AppImages';
import AppStyles from '../../constants/AppStyles';

const MenuDrawer = (props: any) => {
  return (
    <View flex backgroundColor={AppColors.white} paddingV-20>
      <DrawerContentScrollView {...props}>
        <View flex row centerV marginH-15>
          <View>
            <Image source={AppImages.PROF1} />
          </View>
          <View marginL-20>
            <Text>Krishna</Text>
            <Text>user@gmail.com</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View bottom marginB-100 marginH-15>
        <View row centerV>
        <Image source={AppImages.SETTING} width={20} height={20} />
          <Text marginL-35 style={AppStyles.drawerText}>Settings</Text>
        </View>

        <View row centerV marginT-30>
        <Image source={AppImages.LOGOUT} width={20} height={20} />
        <Text marginL-35 style={AppStyles.drawerText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const inlineStyle = StyleSheet.create({});
export default MenuDrawer;
