import {Dimensions, StyleSheet} from 'react-native';

const size = Dimensions.get('window').width / 3;

export const PostsGridStyles = StyleSheet.create({
  container: {
    flex: 7
  },
  postsContainer: {
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
    alignItems: 'flex-start',
    marginTop: 'auto',
    height: 65,
    justifyContent: 'space-between',
    paddingHorizontal: 30
  }
});

export const buttonOpacity = (isActive: boolean) => {
  return isActive
    ? {
        opacity: 1
      }
    : {opacity: 0.5};
};
