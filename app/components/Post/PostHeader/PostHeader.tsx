import React from 'react';
import {Image, Text, View} from 'react-native';
import {PostHeaderStyles} from './PostHeaderStyles';

const PostHeader = () => {
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
