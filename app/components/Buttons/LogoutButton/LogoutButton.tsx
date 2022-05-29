import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {ButtonsStyles} from '../ButtonsStyles';

const LogoutButton = () => {
  return (
    <TouchableOpacity
      style={ButtonsStyles.container}
      onPress={() =>
        Alert.alert('Confirmation', 'Do you want to logout?', [
          {text: 'No'},
          {text: 'Yes'}
        ])
      }>
      <Text style={ButtonsStyles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
