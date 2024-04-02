import React, {useEffect, useState} from 'react';
import {Incubator, Text, View} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AppImages from '../../constants/AppImages';
import {Dimensions, ScrollView} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './style';
import AppColors from '../../constants/AppColors';
import CarouselView from '../../components/CarousalView';
import Packages from './Packages';
import Services from './Services';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import BackgroundLoader from '../../components/BackgroundLoader';

const {TextField} = Incubator;

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

export type HomeScreenRouteProps = RouteProp<RootStackParams, 'HomeScreen'>;

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const itemWidth = (windowWidth - 50) / 2;
  const {loadingPackages} = useSelector(
    (state: RootState) => state.PackageList,
  );
  const {loadingServices} = useSelector(
    (state: RootState) => state.ServiceList,
  );
  const {PatientName} = useSelector(
    (state: RootState) => state.GlobalVariables,
  );

 useEffect(()=>{
  dispatch({
    type: 'CLEAR_ALL_VARIABLES'
  });
 },[loadingPackages,loadingServices]);

  return (
    <View flex>
      <HomeHeader
        leftIcon={AppImages.MENU}
        onPress={() => navigation.toggleDrawer()}
      />

      {loadingPackages && loadingServices && <BackgroundLoader />}
      <ScrollView>
        <View flex marginB-60>
          {/* <View style={styles.cardView}>
            <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
              <Image source={AppImages.CARDLOGO} />
            </View>

            <View style={styles.activeView} center>
              <Text style={styles.activeText}>Active</Text>
            </View>

            <View paddingT-40>
              <Text style={styles.cardText}>Gold MemberShip</Text>
              <View marginT-20>
                <Text style={styles.expireText}>Expires on</Text>
                <Text style={styles.dateText}>June 22, 2024</Text>
              </View>
            </View>
          </View> */}

          <View paddingL-20>
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.nameText}>{PatientName}</Text>
            <Text style={styles.title}>Packages</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Packages navigation={navigation} />
            </ScrollView>
          </View>

          <View>
            <Text style={[styles.title, {padding: 20}]}>Services</Text>

            <Services navigation={navigation} />
          </View>

          {/* <CarouselView/> */}
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
