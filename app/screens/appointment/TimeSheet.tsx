import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Incubator, Button} from 'react-native-ui-lib';
import {Animated, Dimensions, PanResponder, StyleSheet} from 'react-native';
import CommonButton from '../../components/CommonButton';
import AppColors from '../../constants/AppColors';
import {styles} from './styles';
const deviceHeight = Dimensions.get('window').height;

const TimeSheet = (props: {close: any}) => {
  const close = props.close;

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
      style={[styles.modal, {transform: [{translateY: modalY}]}]}
      {...panResponder.panHandlers}>
      <View style={styles.handle} />
      <View marginV-10>
        <Text style={styles.select}>Select a time</Text>
      </View>
      <CommonButton title="Confirm" onPress={() => close()} />
    </Animated.View>
  );
};

export default TimeSheet;
