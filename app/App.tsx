/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import HomeStack from './navigation/HomeStack/HomeStack';
import LoginStack from './navigation/LoginStack/LoginStack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

Icons.loadFont();

const App = () => {
  const isLoading = false;
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    return auth().onAuthStateChanged(setUser);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default App;
