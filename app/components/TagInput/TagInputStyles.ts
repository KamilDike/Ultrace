import {Dimensions, StyleSheet} from 'react-native';

export const TagInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  tagInputContainer: {
    backgroundColor: 'white',
    width: '30%',
    height: 20,
    borderWidth: 2,
    borderRadius: 10
  },
  tagsTextContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10
  },
  button: {
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto'
  },
  buttonLeft: {
    borderBottomLeftRadius: 5,
    width: '50%'
  },
  buttonRight: {
    borderBottomRightRadius: 5,
    width: '50%'
  },
  buttonFull: {
    width: Dimensions.get('window').width * 0.8
  }
});
