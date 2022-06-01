import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ContainerStyles} from '../../styles/ContainerStyles';
import UserPicture from '../../components/UserPicture/UserPicture';
import PostsGrid from './PostsGrid/PostsGrid';
import {mockUris} from '../../DataMock';
import {ProfileScreenStyles} from './ProfileScreenStyles';
import Settings from './Settings/Settings';
import {selectImage} from '../../hooks/selectImage';

const ProfileScreen = () => {
  return (
    <View style={ContainerStyles.center}>
      <View style={ProfileScreenStyles.profileScreenHeader}>
        <TouchableOpacity onPress={() => selectImage()}>
          <UserPicture size={120} />
        </TouchableOpacity>
        <Text>username</Text>
      </View>
      <PostsGrid uris={mockUris} />
      <Settings />
    </View>
  );
};

export default ProfileScreen;
