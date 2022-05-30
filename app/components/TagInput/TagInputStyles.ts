import {StyleSheet} from 'react-native';

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
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto'
  },
  buttonHalf: {
    width: '50%'
  }
});
