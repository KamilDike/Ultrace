import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {ButtonsStyles} from '../ButtonsStyles';

const DeleteAccountButton = () => {
  return (
    <TouchableOpacity style={ButtonsStyles.container}>
      <Text
        style={ButtonsStyles.text}
        onPress={() =>
          Alert.alert('Confirmation', 'Do you want to delete account?', [
            {text: 'No'},
            {text: 'Yes'}
          ])
        }>
        Delete account
      </Text>
    </TouchableOpacity>
  );
};

export default DeleteAccountButton;
