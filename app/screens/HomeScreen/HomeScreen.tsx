import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Post from '../../components/Post/Post';
import SearchBar from '../../components/SearchBar/SearchBar';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {HomeScreenStyles} from './HomeScreenStyles';
import UserPicture from '../../components/UserPicture/UserPicture';

const mockUris = [
  {
    uri: 'https://static.carthrottle.com/workspace/uploads/posts/2017/12/3fc8e7f25dd9d7e79b5accb90809bc9a.jpg'
  },
  {
    uri: 'https://static.carthrottle.com/workspace/uploads/posts/2017/12/3fc8e7f25dd9d7e79b5accb90809bc9a.jpg'
  },
  {
    uri: 'https://static.carthrottle.com/workspace/uploads/posts/2017/12/3fc8e7f25dd9d7e79b5accb90809bc9a.jpg'
  },
  {
    uri: 'https://static.carthrottle.com/workspace/uploads/posts/2017/12/3fc8e7f25dd9d7e79b5accb90809bc9a.jpg'
  }
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={ContainerStyles.center}>
      <View style={HomeScreenStyles.header}>
        <SearchBar />
        <UserPicture size={30} />
      </View>
      <FlatList
        data={mockUris}
        style={HomeScreenStyles.flatList}
        renderItem={({item}) => <Post uri={item.uri} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
