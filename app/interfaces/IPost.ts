import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface IPost {
  id: string;
  name: string;
  uri: string;
  ownerUserId: string;
  likes: Array<string>;
  tags: Array<string>;
  creationDate: FirebaseFirestoreTypes.Timestamp;
}
