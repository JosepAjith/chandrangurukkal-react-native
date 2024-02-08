import React, {useEffect} from 'react';
import {SafeAreaView } from 'react-native';
import { Navigation } from './app/navigation';

const App = () => {

  useEffect(()=>{

  },[]);

  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation/>
    </SafeAreaView>
  )
}

export default App;