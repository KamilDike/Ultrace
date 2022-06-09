import firestore from '@react-native-firebase/firestore';
import {FirestoreEnum} from '../../enums/FirestoreEnum';
import {IUser} from '../../interfaces/IUser';
import auth from '@react-native-firebase/auth';

export async function getUser(userId: string) {
  const userRef = await firestore()
    .collection(FirestoreEnum.USERS)
    .doc(userId)
    .get();
  return userRef.data() as IUser;
}

export function deleteUser() {
  return firestore()
    .collection(FirestoreEnum.USERS)
    .doc(auth().currentUser?.uid)
    .delete();
}

export function updateProfilePicture(profilePicture: string) {
  return firestore()
    .collection(FirestoreEnum.USERS)
    .doc(auth().currentUser?.uid)
    .update({
      profilePicture: profilePicture
    });
}
