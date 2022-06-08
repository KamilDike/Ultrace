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
import {useDispatch} from 'react-redux';
import {AppDispatch} from './redux/store';
import {createUser, fetchUser} from './redux/userSlice';

Icons.loadFont();

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  function toggleLoading(value: boolean): void {
    setIsLoading(value);
  }

  useEffect(() => {
    return auth().onAuthStateChanged(newUser => {
      setUser(newUser);
      //Skip fetch user logic for login screen
      if (newUser === null) return;
      dispatch(fetchUser()).then(res => {
        //If user isn't present in DB, create one
        if (res.payload === undefined) dispatch(createUser());
      });
    });
  }, [dispatch]);

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
