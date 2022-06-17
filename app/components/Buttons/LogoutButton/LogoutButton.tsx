import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {ButtonsStyles} from '../ButtonsStyles';
import auth from '@react-native-firebase/auth';

const LogoutButton = () => {
  return (
    <TouchableOpacity
      style={ButtonsStyles.container}
      onPress={() =>
        Alert.alert('Confirmation', 'Do you want to logout?', [
          {text: 'No'},
          {text: 'Yes', onPress: () => auth().signOut()}
        ])
      }>
      <Text style={ButtonsStyles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
