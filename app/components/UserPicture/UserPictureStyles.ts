import {StyleSheet} from 'react-native';

export const UserPictureStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const UserPictureImageStyles = (size: number) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size
    }
  });
