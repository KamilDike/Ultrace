import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreenEnum} from '../../enums/navigation/ScreenEnum';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HomeScreenEnum.HOME} component={HomeScreen} />
      <Stack.Screen
        name={HomeScreenEnum.PROFILE}
        component={ProfileScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
