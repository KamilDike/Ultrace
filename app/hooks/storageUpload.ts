import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

export function storageUpload(uploadUri: string | undefined) {
  if (!uploadUri) return;

  const uri =
    Platform.OS === 'android' ? uploadUri : uploadUri.replace('file://', '');

  const task = storage().ref('profilePicture');
  return task.putFile(uri);
}
