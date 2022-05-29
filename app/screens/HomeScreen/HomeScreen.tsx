import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import Post from '../../components/Post/Post';
import SearchBar from '../../components/SearchBar/SearchBar';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {HomeScreenStyles} from './HomeScreenStyles';
import UserPicture from '../../components/UserPicture/UserPicture';
import {mockUris} from '../../DataMock';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenEnum} from '../../enums/navigation/ScreenEnum';

type homeScreenNavigationProp = {
  navigate: (value: HomeScreenEnum.PROFILE) => void;
};

const HomeScreen = () => {
  const {navigate} = useNavigation<homeScreenNavigationProp>();

  return (
    <SafeAreaView style={ContainerStyles.center}>
      <View style={HomeScreenStyles.header}>
        <SearchBar />
        <TouchableOpacity onPress={() => navigate(HomeScreenEnum.PROFILE)}>
          <UserPicture size={40} />
        </TouchableOpacity>
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
