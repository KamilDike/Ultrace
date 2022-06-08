import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import {ContainerStyles} from '../../styles/ContainerStyles';
import UserPicture from '../../components/UserPicture/UserPicture';
import PostsGrid from './PostsGrid/PostsGrid';
import {ProfileScreenStyles} from './ProfileScreenStyles';
import Settings from './Settings/Settings';
import {selectImage} from '../../hooks/selectImage';
import {storageUpload} from '../../hooks/storageUpload';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import {getPosts} from '../../services/api/PostsAPI';
import {IPost} from '../../interfaces/IPost';
import {TextStyles} from '../../styles/TextStyles';
import {updateProfilePicture} from '../../services/api/UsersAPI';

const ProfileScreen = () => {
  const profilePictureUri = `users/${auth().currentUser?.uid}/profilePicture`;
  const [profilePicture, setProfilePicture] = useState<
    undefined | null | string
  >(undefined);
  const [reload, setReload] = useState(false);
  const [posts, setPosts] = useState<Array<IPost>>([]);

  useEffect(() => {
    auth().currentUser?.isAnonymous
      ? setProfilePicture(null)
      : storage()
          .ref(profilePictureUri)
          .getDownloadURL()
          .then(downloadUrl => {
            setProfilePicture(downloadUrl);
          })
          .catch(() => setProfilePicture(null));
    getPosts('', true).then(setPosts);
  }, [profilePictureUri, reload]);

  return (
    <View style={ContainerStyles.center}>
      <View style={ProfileScreenStyles.profileScreenHeader}>
        {profilePicture === undefined ? (
          <ActivityIndicator
            style={ProfileScreenStyles.profilePictureLoading}
          />
        ) : (
          <TouchableOpacity
            onPress={() =>
              selectImage()
                .then(({uri}) => {
                  setProfilePicture(undefined);
                  storageUpload(profilePictureUri, uri)?.then(() => {
                    updateProfilePicture(profilePictureUri).then(() =>
                      setReload(!reload)
                    );
                  });
                })
                .catch(error => Alert.alert(error))
            }>
            <UserPicture size={120} uri={profilePicture} />
          </TouchableOpacity>
        )}
        <Text
          style={[
            TextStyles.title,
            TextStyles.bold,
            ProfileScreenStyles.profileNameText
          ]}>
          username
        </Text>
      </View>
      <PostsGrid posts={posts} />
      <Settings />
    </View>
  );
};

export default ProfileScreen;
