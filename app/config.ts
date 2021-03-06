import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export const config = {
  screenHeight: height,
  screenWidth: width,
  storageUri: 'gs://ultrace-fedc4.appspot.com/',
  imgFallbackUri:
    'https://images.unsplash.com/photo-1607858067698-9173edaf2bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZTMwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
};
