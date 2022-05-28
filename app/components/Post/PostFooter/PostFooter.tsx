import React from 'react';
import {Text, View} from 'react-native';
import {PostFooterStyles} from './PostFooterStyles';
import {ColorStyles} from '../../../styles/ColorStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostFooter = () => {
  return (
    <View style={PostFooterStyles.container}>
      <Ionicons
        name="heart-outline"
        size={25}
        color={ColorStyles.dark}
        style={PostFooterStyles.likeIcon}
      />
      <Text style={PostFooterStyles.postDescription}>E30 330I White</Text>
    </View>
  );
};

export default PostFooter;
