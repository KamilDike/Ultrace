import {StyleSheet} from 'react-native';

export const ContainerStyles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center'
  },
  basicShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row'
  }
});
