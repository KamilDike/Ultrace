import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ContainerStyles} from '../../styles/ContainerStyles';
import UserPicture from '../../components/UserPicture/UserPicture';
import PostsGrid from './PostsGrid/PostsGrid';
import {mockUris} from '../../DataMock';
import {ProfileScreenStyles} from './ProfileScreenStyles';
import Settings from './Settings/Settings';
import {selectImage} from '../../hooks/selectImage';
import {storageUpload} from '../../hooks/storageUpload';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const ProfileScreen = () => {
  const profilePictureUri = `users/${auth().currentUser?.uid}/profilePicture`;
  const [profilePicture, setProfilePicture] = useState<
    undefined | null | string
  >(undefined);
  const [reload, setReload] = useState(false);

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
              selectImage().then(({uri}) => {
                setProfilePicture(undefined);
                storageUpload(profilePictureUri, uri)?.then(() =>
                  setReload(!reload)
                );
              })
            }>
            <UserPicture size={120} uri={profilePicture} />
          </TouchableOpacity>
        )}
        <Text>username</Text>
      </View>
      <PostsGrid uris={mockUris} />
      <Settings />
    </View>
  );
};

export default ProfileScreen;
