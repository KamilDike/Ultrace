import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import {PostStyles} from './PostStyles';
import {IPost} from '../../interfaces/IPost';
import FitImage from '../FitImage/FitImage';
import {useNavigation} from '@react-navigation/native';
import {homeScreenNavigationProp} from '../../types/navigationTypes';
import {HomeScreenEnum} from '../../enums/navigation/ScreenEnum';

interface PostProps {
  post: IPost;
}

const Post = ({post}: PostProps) => {
  const {uri, ownerUserId} = post;
  const {navigate} = useNavigation<homeScreenNavigationProp>();

  return (
    <View style={PostStyles.container}>
      <TouchableOpacity
        onPress={() => navigate(HomeScreenEnum.PROFILE, {userId: ownerUserId})}>
        <PostHeader ownerUserId={ownerUserId} />
        <FitImage uri={uri} />
      </TouchableOpacity>
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
