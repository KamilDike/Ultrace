import {StyleSheet} from 'react-native';

export const AuthButtonStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  providerIconStyle: {
    marginRight: 15,
  },
});
