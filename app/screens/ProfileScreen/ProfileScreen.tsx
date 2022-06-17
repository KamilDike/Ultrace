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
import {getUser, updateProfilePicture} from '../../services/api/UsersAPI';
import {IUser} from '../../interfaces/IUser';

interface ProfileScreenProps {
  route: {
    params: {
      userId: string;
    };
  };
}

const ProfileScreen = ({
  route: {
    params: {userId}
  }
}: ProfileScreenProps) => {
  const profilePictureUri = `users/${auth().currentUser?.uid}/profilePicture`;
  const [profilePicture, setProfilePicture] = useState<
    undefined | null | string
  >(undefined);
  const [reload, setReload] = useState(false);
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    storage()
      .ref(profilePictureUri)
      .getDownloadURL()
      .then(downloadUrl => {
        setProfilePicture(downloadUrl);
      })
      .catch(() => setProfilePicture(null));
    (async () => {
      const [newPosts, newUser] = await Promise.all([
        getPosts('', true),
        getUser(userId)
      ]);
      setPosts(newPosts);
      setUser(newUser);
    })();
  }, [profilePictureUri, reload, userId]);

  async function changeProfilePicture() {
    try {
      const {uri} = await selectImage();
      setProfilePicture(undefined);
      const {
        metadata: {fullPath}
      } = await storageUpload(profilePictureUri, uri);
      const profilePictureLink = await storage().ref(fullPath).getDownloadURL();
      await updateProfilePicture(profilePictureLink);
      setReload(!reload);
    } catch (e) {
      Alert.alert("Ups, couldn't change profile photo");
    }
  }

  return (
    <View style={ContainerStyles.center}>
      <View style={ProfileScreenStyles.profileScreenHeader}>
        {profilePicture === undefined ? (
          <ActivityIndicator
            style={ProfileScreenStyles.profilePictureLoading}
          />
        ) : (
          <TouchableOpacity onPress={changeProfilePicture}>
            <UserPicture size={120} uri={profilePicture} />
          </TouchableOpacity>
        )}
        <Text
          style={[
            TextStyles.title,
            TextStyles.bold,
            ProfileScreenStyles.profileNameText
          ]}>
          {user?.name || 'Ultrace'}
        </Text>
      </View>
      <PostsGrid posts={posts} />
      <Settings />
    </View>
  );
};

export default ProfileScreen;
