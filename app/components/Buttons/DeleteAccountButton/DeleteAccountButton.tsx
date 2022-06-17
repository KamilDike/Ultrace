import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {ButtonsStyles} from '../ButtonsStyles';
import {deleteUser} from '../../../services/api/UsersAPI';
import auth from '@react-native-firebase/auth';

const DeleteAccountButton = () => {
  return (
    <TouchableOpacity style={ButtonsStyles.container}>
      <Text
        style={ButtonsStyles.text}
        onPress={() =>
          Alert.alert('Confirmation', 'Do you want to delete account?', [
            {text: 'No'},
            {
              text: 'Yes',
              onPress: () => deleteUser().then(() => auth().signOut())
            }
          ])
        }>
        Delete account
      </Text>
    </TouchableOpacity>
  );
};

export default DeleteAccountButton;
