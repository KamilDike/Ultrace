import React from 'react';
import {Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserPictureImageStyles, UserPictureStyles} from './UserPictureStyles';

interface UserPictureProps {
  uri?: string | undefined | null;
  size: number;
}

const UserPicture = ({uri, size}: UserPictureProps) => {
  return (
    <View style={UserPictureStyles.container}>
      {uri ? (
        <Image
          source={{uri: uri}}
          style={UserPictureImageStyles(size).container}
        />
      ) : (
        <Ionicons name="person-circle-outline" size={size} />
      )}
    </View>
  );
};

export default UserPicture;
