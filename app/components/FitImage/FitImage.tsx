import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {config} from '../../config';
import {ContainerStyles} from '../../styles/ContainerStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FitImageStyles} from './FitImageStyles';

interface FitImageProps {
  uri: string;
}

const FitImage = ({uri}: FitImageProps) => {
  const [imageHeight, setImageHeight] = useState<number>();

  useEffect(() => {
    let isMounted = true;
    Image.getSize(
      uri,
      (width, height) => {
        const widthRatio = width / config.screenWidth;
        const fitHeight = height / widthRatio;
        if (isMounted) setImageHeight(fitHeight);
      },
      () => setImageHeight(0)
    );
    return () => {
      isMounted = false;
    };
  }, [uri]);

  if (imageHeight === undefined)
    return (
      <View
        style={[ContainerStyles.center, FitImageStyles.initialContainerHeight]}>
        <ActivityIndicator />
      </View>
    );

  return imageHeight ? (
    <Image source={{uri: uri}} style={{height: imageHeight}} />
  ) : (
    <View
      style={[ContainerStyles.center, FitImageStyles.initialContainerHeight]}>
      <Ionicons name="bug-outline" size={50} style={FitImageStyles.bugIcon} />
      <Text>Ups, couldn't load photo</Text>
    </View>
  );
};

export default FitImage;
