import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
import {store} from './src/store/store'

import { NavigationContainer } from '@react-navigation/native'
import ButtonTabNav from './src/navigation/ButtonTabNav';

const App = () => {
  return (
    <NavigationContainer>
      <ButtonTabNav />
    </NavigationContainer>
  );
};

export default () => {
  return <Provider store={store} >
    <App />
  </Provider>
}
