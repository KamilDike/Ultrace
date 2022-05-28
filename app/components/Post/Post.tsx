import React from 'react';
import {View} from 'react-native';
import FitImage from 'react-native-fit-image';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import {PostStyles} from './PostStyles';

interface PostProps {
  uri: string | undefined;
}

const Post = ({uri}: PostProps) => {
  return (
    <View style={PostStyles.container}>
      <PostHeader />
      <FitImage
        source={{
          uri: uri
        }}
      />
      <PostFooter />
    </View>
  );
};

export default Post;
