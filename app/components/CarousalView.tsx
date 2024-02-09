import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {  Text, View } from 'react-native-ui-lib';
import { Dimensions, FlatList, Image } from 'react-native';
import AppImages from '../constants/AppImages';


const CarouselView = ({}) => {
    const width = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([
        {
          id: 1,
          image: AppImages.PURCHASEIMG
        },
        {
          id: 2,
          image: AppImages.PURCHASEIMG
        },
        {
          id: 3,
          image: AppImages.PURCHASEIMG
        },
        {
          id: 4,
          image: AppImages.PURCHASEIMG
        },
      ]);


    return (
        <View center>
        <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
         <View style={{backgroundColor:"#76AE91",height:100,width:340,borderRadius:8}}>
            </View>
        )}
    />
    
    </View>
    )
}

export default CarouselView;