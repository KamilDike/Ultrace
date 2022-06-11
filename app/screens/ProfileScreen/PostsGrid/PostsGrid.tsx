import React, {useState} from 'react';
import {Alert, Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {buttonOpacity, PostsGridStyles} from './PostsGridStyles';
import {IPost} from '../../../interfaces/IPost';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContainerStyles} from '../../../styles/ContainerStyles';
import AddPostForm from '../../../components/AddPostForm/AddPostForm';
import {selectImage} from '../../../hooks/selectImage';

interface PostsGridInterface {
  posts: Array<IPost>;
}

const PostsGrid = ({posts}: PostsGridInterface) => {
  const [page, setPage] = useState(0);
  const [postUri, setPostUri] = useState<string>();

  const currentUrisIndex = 8 * page;
  const urisLength = page ? 9 : 8;
  const currentUris = posts.slice(
    currentUrisIndex,
    currentUrisIndex + urisLength
  );
  const [backPageButtonActive, forwardPageButtonActive] = [
    page > 0,
    currentUrisIndex + urisLength < posts.length
  ];

  return (
    <View style={PostsGridStyles.container}>
      <Modal visible={!!postUri} transparent={true}>
        <AddPostForm exit={() => setPostUri(undefined)} postUri={postUri!} />
      </Modal>

      <View
        style={[PostsGridStyles.postsContainer, ContainerStyles.basicShadow]}>
        {page === 0 && (
          <TouchableOpacity
            style={PostsGridStyles.postContainer}
            onPress={() =>
              selectImage()
                .then(({uri}) => setPostUri(uri))
                .catch(() => Alert.alert("Ups, couldn't load photo"))
            }>
            <Ionicons name="add" size={30} />
            <Text>Add Post</Text>
          </TouchableOpacity>
        )}
        {currentUris.map(({uri}, index) => (
          <TouchableOpacity key={index}>
            <Image source={{uri: uri}} style={PostsGridStyles.postContainer} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={PostsGridStyles.footer}>
        <TouchableOpacity
          onPress={() => setPage(page - 1)}
          disabled={!backPageButtonActive}
          style={buttonOpacity(backPageButtonActive)}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPage(page + 1)}
          disabled={!forwardPageButtonActive}
          style={buttonOpacity(forwardPageButtonActive)}>
          <Ionicons name="chevron-forward" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsGrid;
