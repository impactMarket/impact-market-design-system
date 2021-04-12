import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';

import Select from './index'

import { ipctColors } from '../../../styles/index';

export const App = () => {

const loaded = useFonts({
  'Gelion-Regular': require('../../../../assets/fonts/FontGelion/Gelion-Regular.ttf'),
  'Gelion-Bold': require('../../../../assets/fonts/FontGelion/Gelion-Bold.ttf')
})

if (!loaded) {
  return <View />
}

return (
  <View style={styles.container}>

  <Select
    label={'select input'}
    value={''}
    onPress={() => {}}
  />
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: ipctColors.white,
    justifyContent: 'center',
    padding: 20
  },
  inputContainer: {
    marginVertical: 22
  }
});

export default App