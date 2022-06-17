import {StyleSheet} from 'react-native';

export const SearchBarStyles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 4
  },
  searchIcon: {
    marginHorizontal: 5
  },
  searchInput: {
    width: '90%',
    textAlignVertical: 'center',
    padding: 5
  }
});
