import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TopTabs } from './components/TopTabs';
import { NavegacionDrawer } from './components/Drawer';

export default function App() {

  return (
    <NavigationContainer>
      <NavegacionDrawer/>
      {/*<TopTabs/>*/}
    </NavigationContainer>
  );
}