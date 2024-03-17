import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavegacionDrawer } from './components/Drawer';

export default function App() {

  return (
    <NavigationContainer>
      <NavegacionDrawer/>
    </NavigationContainer>
  );
}