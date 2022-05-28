import {StyleSheet} from 'react-native';

export const PostHeaderStyles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userPicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 20
  },
  userName: {
    fontWeight: 'bold'
  }
});
