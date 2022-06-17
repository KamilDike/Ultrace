import firestore from '@react-native-firebase/firestore';
import {FirestoreEnum} from '../../enums/FirestoreEnum';
import {IPost} from '../../interfaces/IPost';
import auth from '@react-native-firebase/auth';

export async function getPosts(
  searchValue: string = '',
  owner: boolean = false
) {
  const posts: Array<IPost> = [];
  const postsQuery = firestore()
    .collection(FirestoreEnum.POSTS)
    .orderBy('creationDate', 'desc');
  if (owner) postsQuery.where('ownerUserId', '==', auth().currentUser?.uid);
  if (searchValue) postsQuery.where('tags', 'array-contains', searchValue);

  const postsRef = await postsQuery.get();
  postsRef.forEach(data => posts.push(data.data() as IPost));
  return posts;
}

export async function likePost(postId: string) {
  return firestore()
    .collection(FirestoreEnum.POSTS)
    .doc(postId)
    .update({
      likes: firestore.FieldValue.arrayUnion(auth().currentUser?.uid)
    });
}

export async function dislikePost(postId: string) {
  return firestore()
    .collection(FirestoreEnum.POSTS)
    .doc(postId)
    .update({
      likes: firestore.FieldValue.arrayRemove(auth().currentUser?.uid)
    });
}

// export async function addPost(post: IPost) {
//   return firestore().collection(FirestoreEnum.POSTS).add(post);
// }
//
// export async function getPost(postId: string) {
//   return firestore().collection(FirestoreEnum.POSTS).doc(postId);
// }
