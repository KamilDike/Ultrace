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
import {ApplicationContext} from './context/ApplicationContext';

Icons.loadFont();

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function toggleLoading(value: boolean): void {
    setIsLoading(value);
  }

  useEffect(() => {
    return auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <ApplicationContext.Provider value={{isLoading, toggleLoading}}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          {user ? <HomeStack /> : <LoginStack />}
        </NavigationContainer>
      )}
    </ApplicationContext.Provider>
  );
};

export default App;
