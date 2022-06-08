import React from 'react';
import {View} from 'react-native';
import FitImage from 'react-native-fit-image';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import {PostStyles} from './PostStyles';
import {IPost} from '../../interfaces/IPost';

interface PostProps {
  post: IPost;
}

const Post = ({post}: PostProps) => {
  const {uri, ownerUserId} = post;

  return (
    <View style={PostStyles.container}>
      <PostHeader ownerUserId={ownerUserId} />
      <View style={PostStyles.imageContainer}>
        <FitImage
          source={{
            uri: uri
          }}
        />
      </View>
      <PostFooter post={post} />
    </View>
  );
};

export default Post;
