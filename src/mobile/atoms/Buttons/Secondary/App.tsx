import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import { ipctColors } from '../../../styles/index';

import Button from './index'

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
             type="outlined"
              modeType="green"
            >
                Secondary Button green
            </Button>
      </View>
      <View style={styles.btnContainer}>
             <Button
             type="outlined"
              modeType="default"
            >
                Secondary Button default
            </Button>
      </View>
      <View style={styles.btnContainer}>
             <Button
             type="outlined"
                modeType="gray"
            >
                Secondary Button gray
            </Button>
      </View>
      <View style={styles.btnContainer}>
             <Button
             type="outlined"
             modeType="gray"
             disabled
              >
                Secondary Button disabled
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