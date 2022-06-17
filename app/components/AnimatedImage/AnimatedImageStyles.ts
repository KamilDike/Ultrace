import {StyleSheet} from 'react-native';
import {config} from '../../config';

export const AnimatedImageStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: config.screenWidth
  }
});
