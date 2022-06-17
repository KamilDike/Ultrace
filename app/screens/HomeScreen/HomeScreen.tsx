import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import Post from '../../components/Post/Post';
import SearchBar from '../../components/SearchBar/SearchBar';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {HomeScreenStyles} from './HomeScreenStyles';
import UserPicture from '../../components/UserPicture/UserPicture';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenEnum} from '../../enums/navigation/ScreenEnum';
import auth from '@react-native-firebase/auth';
import {getPosts} from '../../services/api/PostsAPI';
import {IPost} from '../../interfaces/IPost';
import {homeScreenNavigationProp} from '../../types/navigationTypes';

const HomeScreen = () => {
  const {navigate} = useNavigation<homeScreenNavigationProp>();
  const [searchValue, setSearchValue] = useState('');
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  const refresh = useCallback(() => {
    getPosts(searchValue).then(refreshedPosts => {
      setPosts(refreshedPosts);
      setTimeout(() => setIsRefreshing(false), 2000);
    });
  }, [searchValue]);

  useEffect(() => {
    refresh();
  }, [searchValue, refresh]);

  const renderItem = useCallback(
    ({item}) => <Post post={item} key={item.id} />,
    []
  );

  return (
    <SafeAreaView style={ContainerStyles.center}>
      <View style={HomeScreenStyles.header}>
        <SearchBar search={setSearchValue} />
        <TouchableOpacity
          onPress={() => {
            auth().currentUser?.isAnonymous
              ? auth().signOut()
              : navigate(HomeScreenEnum.PROFILE, {
                  userId: auth().currentUser!.uid
                });
          }}>
          <UserPicture size={40} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        style={HomeScreenStyles.flatList}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={refresh}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
