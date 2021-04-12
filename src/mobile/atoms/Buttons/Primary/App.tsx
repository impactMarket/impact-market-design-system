import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';

import Button from './index'

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
    <View style={styles.btnContainer}>
           <Button
           type="contained"
            modeType="green"
          >
              Primary Button green
          </Button>
    </View>
    <View style={styles.btnContainer}>
           <Button
           type="contained"
            modeType="default"
          >
              Primary Button default
          </Button>
    </View>
    <View style={styles.btnContainer}>
           <Button
           type="contained"
              modeType="gray"
          >
              Primary Button gray
          </Button>
    </View>
    <View style={styles.btnContainer}>
           <Button
           type="contained"
           modeType="gray"
           disabled
            >
              Primary Button disabled
          </Button>
    </View>
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
  btnContainer: {
    marginVertical: 22
  }
});

export default App