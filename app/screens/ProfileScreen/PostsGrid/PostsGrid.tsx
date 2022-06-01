import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {PostsGridStyles, SwitchPageContainer} from './PostsGridStyles';
import {IPost} from '../../../interfaces/IPost';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContainerStyles} from '../../../styles/ContainerStyles';
import AddPostForm from '../../../components/AddPostForm/AddPostForm';
import {selectImage} from '../../../hooks/selectImage';

interface PostsGridInterface {
  uris: Array<IPost>;
}

const PostsGrid = ({uris}: PostsGridInterface) => {
  const [page, setPage] = useState(0);
  const [isAddPostVisible, setIsAddPostVisible] = useState(false);

  const currentUrisIndex = 8 * page;
  const urisLength = page ? 9 : 8;
  const currentUris = uris.slice(
    currentUrisIndex,
    currentUrisIndex + urisLength
  );
  const [backPageButtonActive, forwardPageButtonActive] = [
    page > 0,
    currentUrisIndex + urisLength < uris.length
  ];

  return (
    <View>
      <Modal visible={isAddPostVisible} transparent={true}>
        <AddPostForm exit={() => setIsAddPostVisible(false)} />
      </Modal>
      <View style={[PostsGridStyles.container, ContainerStyles.basicShadow]}>
        {page === 0 && (
          <TouchableOpacity
            style={PostsGridStyles.postContainer}
            onPress={() => {
              selectImage().then(() => setIsAddPostVisible(true));
            }}>
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
          style={SwitchPageContainer(backPageButtonActive).container}
          onPress={() => {
            if (backPageButtonActive) setPage(page - 1);
          }}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SwitchPageContainer(forwardPageButtonActive).container}
          onPress={() => {
            if (forwardPageButtonActive) setPage(page + 1);
          }}>
          <Ionicons name="chevron-forward" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsGrid;
