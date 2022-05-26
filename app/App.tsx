/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Icons from 'react-native-vector-icons/Ionicons';

Icons.loadFont();

const App = () => {
  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
