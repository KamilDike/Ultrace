import {StyleSheet} from 'react-native';

export const SettingsStyles = StyleSheet.create({
  container: {
    padding: 10,
    position: 'absolute',
    bottom: 20
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  closeModal: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: '10%'
  }
});
