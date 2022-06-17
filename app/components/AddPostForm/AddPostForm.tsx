import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {IPost} from '../../interfaces/IPost';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {FirestoreEnum} from '../../enums/FirestoreEnum';
import Prompt from 'react-native-single-prompt';
import {ColorStyles} from '../../styles/ColorStyles';
import {AddPostFormStyles} from './AddPostFormStyles';

interface AddPostFormProps {
  exit: () => void;
  postUri: string;
}

const AddPostForm = ({exit, postUri}: AddPostFormProps) => {
  const [loading, setLoading] = useState(false);

  async function createPost(postName: string | undefined) {
    try {
      if (!postName || postName.length < 3) throw 'Post name is too short';
      setLoading(true);
      const documentRef = firestore().collection(FirestoreEnum.POSTS).doc();
      const storageRef = storage().ref(
        `users/${auth().currentUser?.uid}/posts/${documentRef.id}`
      );
      await storageRef.putFile(postUri);
      const downloadUrl = await storageRef.getDownloadURL();

      const postNameTags = postName
        .split(' ')
        .filter(phrase => phrase.length > 2);

      const post: IPost = {
        id: documentRef.id,
        uri: downloadUrl,
        name: postName,
        likes: [],
        tags: postNameTags,
        ownerUserId: auth().currentUser!.uid,
        creationDate: firestore.Timestamp.fromDate(new Date())
      };
      await documentRef.set(post);
      Alert.alert('Post added');
      exit();
      setLoading(false);
    } catch (err) {
      if (typeof err === 'string') Alert.alert(err);
      else Alert.alert('Ups, something went wrong');
    }
  }

  return loading ? (
    <ActivityIndicator
      size={'large'}
      color={ColorStyles.dark}
      style={AddPostFormStyles.loadingContainer}
    />
  ) : (
    <Prompt name="Post name" exit={exit} callback={createPost} />
  );
};

export default AddPostForm;
