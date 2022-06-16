import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {PostFooterStyles} from './PostFooterStyles';
import {ColorStyles} from '../../../styles/ColorStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IPost} from '../../../interfaces/IPost';
import {dislikePost, likePost} from '../../../services/api/PostsAPI';
import auth from '@react-native-firebase/auth';

interface PostFooterProps {
  post: IPost;
}

const PostFooter = ({post}: PostFooterProps) => {
  const {likes, name, id: postId} = post;
  const [isLiked, setIsLiked] = useState<boolean>(
    likes.includes(auth().currentUser?.uid || '')
  );

  return (
    <View style={PostFooterStyles.container}>
      {isLiked ? (
        <TouchableOpacity
          onPress={() => {
            dislikePost(postId).catch(() =>
              Alert.alert('Ups, network problem')
            );
            setIsLiked(false);
          }}>
          <Ionicons
            name="heart-circle-outline"
            size={25}
            color={ColorStyles.dark}
            style={PostFooterStyles.likeIcon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            likePost(postId).catch(() => Alert.alert('Ups, network error'));
            setIsLiked(true);
          }}>
          <Ionicons
            name="heart-outline"
            size={25}
            color={ColorStyles.dark}
            style={PostFooterStyles.likeIcon}
          />
        </TouchableOpacity>
      )}
      <Text style={PostFooterStyles.postDescription}>{name}</Text>
    </View>
  );
};

export default PostFooter;
