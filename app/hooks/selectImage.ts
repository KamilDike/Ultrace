import {launchImageLibrary} from 'react-native-image-picker';

export function selectImage() {
  return launchImageLibrary({mediaType: 'photo'});
}
