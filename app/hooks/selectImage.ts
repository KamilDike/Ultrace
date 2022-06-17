import {launchImageLibrary} from 'react-native-image-picker';

export async function selectImage() {
  const image = await launchImageLibrary({mediaType: 'photo'});
  if (image?.assets?.length) return image.assets[0];

  throw "Couldn't load image";
}
