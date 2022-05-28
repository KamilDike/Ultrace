import {StyleSheet} from 'react-native';

export const SearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    flex: 4
  },
  searchIcon: {
    marginHorizontal: 5
  },
  searchInput: {
    width: '90%'
  }
});
