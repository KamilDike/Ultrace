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
import Icons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import HomeStack from './navigation/HomeStack/HomeStack';
import LoginStack from './navigation/LoginStack/LoginStack';

Icons.loadFont();

const App = () => {
  const isLoading = false;
  const isLogged = false;

  if (isLoading) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {isLogged ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default App;
