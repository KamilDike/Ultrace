import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {PostHeaderStyles} from './PostHeaderStyles';
import {getUser} from '../../../services/api/UsersAPI';
import {IUser} from '../../../interfaces/IUser';
import {ContainerStyles} from '../../../styles/ContainerStyles';
import {ColorStyles} from '../../../styles/ColorStyles';
import {config} from '../../../config';

interface PostHeaderProps {
  ownerUserId: string;
}

const PostHeader = ({ownerUserId}: PostHeaderProps) => {
  const [owner, setOwner] = useState<IUser>();

  useEffect(() => {
    getUser(ownerUserId).then(setOwner);
  }, [ownerUserId]);

  return (
    <View style={PostHeaderStyles.container}>
      {owner ? (
        <View style={ContainerStyles.horizontal}>
          <Image
            source={{
              uri: owner.profilePicture || config.imgFallbackUri
            }}
            style={PostHeaderStyles.userPicture}
          />
          <Text style={PostHeaderStyles.userName}>{owner.name}</Text>
        </View>
      ) : (
        <ActivityIndicator size="small" color={ColorStyles.dark} />
      )}
    </View>
  );
};

export default PostHeader;
