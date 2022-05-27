import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreenEnum} from '../../enums/navigation/ScreenEnum';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LoginScreenEnum.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
