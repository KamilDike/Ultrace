import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ContainerStyles} from '../styles/ContainerStyles';
import {ColorStyles} from '../styles/ColorStyles';

const LoadingScreen = () => {
  return (
    <View style={ContainerStyles.center}>
      <ActivityIndicator size="large" color={ColorStyles.dark} />
    </View>
  );
};

export default LoadingScreen;
