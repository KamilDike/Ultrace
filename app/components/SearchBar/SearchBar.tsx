import React from 'react';
import {TextInput, View} from 'react-native';
import {SearchBarStyles} from './SearchBarStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {
  search: (text: string) => void;
}

const SearchBar = ({search}: SearchBarProps) => {
  return (
    <View style={SearchBarStyles.container}>
      <Ionicons name="search-outline" style={SearchBarStyles.searchIcon} />
      <TextInput
        placeholder="bmw e30"
        style={SearchBarStyles.searchInput}
        onEndEditing={({nativeEvent: {text}}) => search(text)}
      />
    </View>
  );
};

export default SearchBar;
