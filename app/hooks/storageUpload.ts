import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

export function storageUpload(
  ref: string | undefined,
  uploadUri: string | undefined
) {
  if (!uploadUri || !ref) return;

  const uri =
    Platform.OS === 'android' ? uploadUri : uploadUri.replace('file://', '');

  const task = storage().ref(ref);
  return task.putFile(uri);
}
