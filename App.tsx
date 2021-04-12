import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Buttons
import PrimaryButton from './src/mobile/atoms/Buttons/Primary/App';
import SecondaryButton from './src/mobile/atoms/Buttons/Secondary/App';

// Inputs
import BasicInput from './src/mobile/atoms/Inputs/Basic/App';
import ErroredInput from './src/mobile/atoms/Inputs/Errored/App';
import SelectInput from './src/mobile/atoms/Inputs/Select/App';

//Carousel


//Cards


const Drawer = createDrawerNavigator();

export default function () {
  return <NavigationContainer>
    <Drawer.Navigator
      drawerStyle={{ marginBottom: 30 }}>
      <Drawer.Screen name='Primary Button' component={PrimaryButton} />
      <Drawer.Screen name='Secondary Button' component={SecondaryButton} />
      <Drawer.Screen name='Basic Input' component={BasicInput} />
      <Drawer.Screen name='Errored Input' component={ErroredInput} />
      <Drawer.Screen name='Select Input' component={SelectInput} />

    </Drawer.Navigator>
  </NavigationContainer>;
}
