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

import IndexScreen from './src/screens/IndexScreen';

const App = () => {
  return (
    <>
    <IndexScreen />
    </>
  );
};

export default () => {
  return <Provider store={store} >
    <App />
  </Provider>
}
