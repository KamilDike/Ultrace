import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SettingsStyles} from './SettingsStyles';
import LogoutButton from '../../../components/Buttons/LogoutButton/LogoutButton';
import DeleteAccountButton from '../../../components/Buttons/DeleteAccountButton/DeleteAccountButton';

const Settings = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <TouchableOpacity
      style={SettingsStyles.container}
      onPress={() => setIsModalActive(true)}>
      <Modal visible={isModalActive} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setIsModalActive(false)}>
          <View style={SettingsStyles.modal}>
            <TouchableOpacity
              style={SettingsStyles.closeModal}
              onPress={() => setIsModalActive(false)}>
              <Ionicons name="close-outline" size={35} />
            </TouchableOpacity>
            <LogoutButton />
            <DeleteAccountButton />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Ionicons name="settings-sharp" size={30} />
    </TouchableOpacity>
  );
};

export default Settings;
