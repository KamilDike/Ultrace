import {Dimensions, StyleSheet} from 'react-native';

const size = Dimensions.get('window').width / 3;

export const PostsGridStyles = StyleSheet.create({
  container: {
    width: size * 3,
    height: size * 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  postContainer: {
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }
});

export const SwitchPageContainer = (isActive: boolean) =>
  StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      justifyContent: 'flex-end',
      alignItems: 'center',
      opacity: isActive ? 1 : 0.2
    }
  });
