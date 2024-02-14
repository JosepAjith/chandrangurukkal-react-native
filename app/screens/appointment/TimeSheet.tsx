import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Incubator, Button, GridList} from 'react-native-ui-lib';
import {Animated, Dimensions, PanResponder, StyleSheet} from 'react-native';
import CommonButton from '../../components/CommonButton';
import AppColors from '../../constants/AppColors';
import {styles} from './styles';
const deviceHeight = Dimensions.get('window').height;

const TimeSheet = (props: {close: any}) => {
  const close = props.close;
  const [times, setTimes] = useState([
    {id: 1, time: '06:00 AM'},
    {id: 2, time: '07:00 AM'},
    {id: 3, time: '08:00 AM'},
    {id: 4, time: '09:00 AM'},
    {id: 5, time: '10:00 AM'},
    {id: 6, time: '11:00 AM'},
    {id: 7, time: '12:00 PM'},
    {id: 8, time: '02:00 PM'},
    {id: 9, time: '03:00 PM'},
    {id: 10, time: '04:00 PM'},
    {id: 11, time: '05:00 PM'},
    {id: 12, time: '06:00 PM'},
    {id: 13, time: '07:00 PM'},
    {id: 14, time: '08:00 PM'},
  ]);

  useEffect(() => {
    openModal();
  }, []);

  const modalY = useRef(new Animated.Value(deviceHeight)).current;

  const openModal = () => {
    Animated.timing(modalY, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    close();
    Animated.timing(modalY, {
      toValue: 300,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          modalY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeModal();
        } else {
          Animated.spring(modalY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[styles.modal, {transform: [{translateY: modalY}],padding:0}]}
      {...panResponder.panHandlers}>
      <View style={[styles.handle,{marginTop:20}]} />
      <View>
        <Text style={[styles.select,{margin:20}]}>Select a time</Text>

        <GridList
     data={times}
     listPadding={20}
     numColumns={3}
     renderItem={({item, index}) => {
       return (
        <View center paddingV-5 style={{borderWidth:1,borderColor:AppColors.stroke,backgroundColor:'#F1F1F1'}}>
         <Text style={styles.time}>{item.time}</Text>
         </View>
       )}}
   />
      </View>
      <View padding-20>
      <CommonButton title="Confirm" onPress={() => close()} />
      </View>
    </Animated.View>
  );
};

export default TimeSheet;
