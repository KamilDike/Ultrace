import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {AddPostFormStyles} from './AddPostFormStyles';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {TagInputStyles} from '../TagInput/TagInputStyles';
import auth from '@react-native-firebase/auth';
import {IPost} from '../../interfaces/IPost';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {FirestoreEnum} from '../../enums/FirestoreEnum';
import {ColorStyles} from '../../styles/ColorStyles';

interface AddPostFormProps {
  exit: () => void;
  postUri: string;
}

const AddPostForm = ({exit, postUri}: AddPostFormProps) => {
  const [postName, setPostName] = useState<string>('');
  // const [tags,  setTags] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  async function createPost() {
    try {
      if (postName.length < 3) throw 'Post name is too short';
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
      setLoading(false);
    }
  }

  return (
    <View style={ContainerStyles.modal}>
      <View style={AddPostFormStyles.container}>
        {loading ? (
          <ActivityIndicator size={'large'} color={ColorStyles.dark} />
        ) : (
          <View style={ContainerStyles.center}>
            <TextInput
              placeholder="Post name"
              style={AddPostFormStyles.input}
              onChangeText={setPostName}
            />
            {/*<TagInput tags={tags} setTags={setTags} />*/}
            <View style={ContainerStyles.horizontal}>
              <TouchableOpacity
                style={[TagInputStyles.button, TagInputStyles.buttonLeft]}
                onPress={exit}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[TagInputStyles.button, TagInputStyles.buttonRight]}
                onPress={createPost}>
                <Text>Add post</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddPostForm;
