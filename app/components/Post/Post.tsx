import React, {memo} from 'react';
import {View} from 'react-native';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import {PostStyles} from './PostStyles';
import {IPost} from '../../interfaces/IPost';
import FitImage from '../FitImage/FitImage';

interface PostProps {
  post: IPost;
}

const Post = ({post}: PostProps) => {
  const {uri, ownerUserId} = post;

  return (
    <View style={PostStyles.container}>
      <PostHeader ownerUserId={ownerUserId} />
      <View style={PostStyles.imageContainer}>
        <FitImage uri={uri} />
      </View>
      <PostFooter post={post} />
    </View>
  );
};

function arePropsEqual(
  {post: prevProps}: PostProps,
  {post: nextProps}: PostProps
) {
  return prevProps.id === nextProps.id;
}

export default memo(Post, arePropsEqual);
