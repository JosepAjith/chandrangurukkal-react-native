import React, {useState} from 'react';
import {
  Button,
  GridList,
  Image,
  Incubator,
  Spacings,
  Text,
  View,
} from 'react-native-ui-lib';
import {RootStackParams, RouteNames} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AppImages from '../../constants/AppImages';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MenuDrawer from '../drawer/MenuDrawer';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './style';
import AppColors from '../../constants/AppColors';
import CarouselView from '../../components/CarousalView';

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
  const itemWidth = (windowWidth - 50) / 2;
  const [packages, setPackages] = useState([
    {id: 1, image: AppImages.SERVICE, title: 'Body Rejuvenation Package'},
    {id: 2, image: AppImages.SERVICE, title: 'Body Detox Package'},
    {id: 3, image: AppImages.SERVICE, title: 'Weight Loss Package'},
    {id: 4, image: AppImages.SERVICE, title: 'One Year Package'},
  ]);

  const [services, setServices] = useState([
    {id: 1, image: AppImages.SHIRO, title: 'Shirovasti'},
    {id: 2, image: AppImages.ABHYA, title: 'Abhyanga'},
    {id: 3, image: AppImages.NASYAM, title: 'Nasyam'},
    {id: 4, image: AppImages.KIZHI, title: 'Kizhi'},
    {id: 5, image: AppImages.SHIRO, title: 'Tharpanam'},
    {id: 6, image: AppImages.ABHYA, title: 'Pizhichil'},
    {id: 7, image: AppImages.NASYAM, title: 'Shirodhara'},
    {id: 8, image: AppImages.KIZHI, title: 'Tharpanam'},
    {id: 9, image: AppImages.SHIRO, title: 'Shirovasti'},
    {id: 10, image: AppImages.ABHYA, title: 'Abhyanga'},
    {id: 11, image: AppImages.NASYAM, title: 'Nasyam'},
    {id: 12, image: AppImages.KIZHI, title: 'Kizhi'},
    {id: 13, image: AppImages.SHIRO, title: 'Tharpanam'},
    {id: 14, image: AppImages.ABHYA, title: 'Pizhichil'},
    {id: 15, image: AppImages.NASYAM, title: 'Shirodhara'},
  ]);
  return (
    <ScrollView style={{backgroundColor: AppColors.white}} showsVerticalScrollIndicator={false}>
      <View flex paddingV-20>
        <HomeHeader
          leftIcon={AppImages.MENU}
          onPress={() => navigation.toggleDrawer()}
        />

        <View flex marginT-20 marginB-60>
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
            <Text style={styles.nameText}>Krishna</Text>
            <Text style={styles.title}>Packages</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {packages.map((item, index) => (
                <View key={index} marginT-10 marginR-10>
                  <ImageBackground
                    source={item.image}
                    style={{width: 330, height: 180}}
                    imageStyle={{borderRadius: 10}}>
                    <View flex bottom marginH-20 marginB-20>
                      <Text style={styles.packageText}>{item.title}</Text>
                      <View row marginT-20>
                        <View style={styles.smallView}>
                          <Text style={styles.priceText}>AED 2500</Text>
                        </View>

                        <View marginL-5 style={styles.smallView}>
                          <Text style={styles.priceText}>10 - 15 days</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </ScrollView>
          </View>

          <View>
            <Text style={[styles.title, {padding: 20}]}>Services</Text>

            <GridList
              listPadding={20}
              data={services}
              numColumns={4}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(RouteNames.ScheduleAppointment, {
                        status: 'appoint',
                      })
                    }>
                    <View center>
                      <Image source={item.image} width={70} height={70} />
                      <Text style={styles.serviceText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* <CarouselView/> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
