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
import {Alert, Modal} from 'react-native';
import Prompt from 'react-native-single-prompt';

Icons.loadFont();

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [createUserVisible, setCreateUserVisible] = useState(false);
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
        if (res.payload === undefined) setCreateUserVisible(true);
      });
    });
  }, [dispatch]);

  function submitUsername(name: string | undefined) {
    if (!name || name.length < 3)
      return Alert.alert('Name should have at least 3 characters');
    dispatch(createUser(name)).then(() => setCreateUserVisible(false));
  }

  return (
    <ApplicationContext.Provider value={{isLoading, toggleLoading}}>
      {createUserVisible && auth().currentUser?.isAnonymous === false && (
        <Modal>
          <Prompt
            name="Username"
            callback={submitUsername}
            exit={() => auth().signOut()}
          />
        </Modal>
      )}
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
