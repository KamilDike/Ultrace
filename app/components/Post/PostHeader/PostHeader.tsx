import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {PostHeaderStyles} from './PostHeaderStyles';
import {getUser} from '../../../services/api/UsersAPI';
import {IUser} from '../../../interfaces/IUser';

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
      <Image
        source={{
          uri: 'https://secure.gravatar.com/avatar/3490b8a45704289fb6d9e99754c6b1c6?s=32&d=404'
        }}
        style={PostHeaderStyles.userPicture}
      />
      <Text style={PostHeaderStyles.userName}>Kamil</Text>
    </View>
  );
};

export default PostHeader;
