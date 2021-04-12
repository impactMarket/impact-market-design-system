import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Texts

// Buttons

//Carousel


//Cards


const Drawer = createDrawerNavigator();

export default function () {
  return <NavigationContainer>
    <Drawer.Navigator
      drawerStyle={{ marginBottom: 30 }}>
      <Drawer.Screen name='Textfield default' component={TextFieldsDefault} />
    </Drawer.Navigator>
  </NavigationContainer>;
}
