import React, {useEffect, useState} from 'react';
import AnimatedImage from '../../../components/AnimatedImage/AnimatedImage';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import {config} from '../../../config';
import {ImageModalStyles} from './ImageModalStyles';
import {ContainerStyles} from '../../../styles/ContainerStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ImageModalProps {
  imageUri: string;
  exit: () => void;
}

const ImageModal = ({imageUri, exit}: ImageModalProps) => {
  const [imageHeight, setImageHeight] = useState<number>();

  useEffect(() => {
    Image.getSize(
      imageUri,
      (width, height) => {
        const widthRatio = width / config.screenWidth;
        const fitHeight = height / widthRatio;
        setImageHeight(fitHeight);
      },
      () => setImageHeight(0)
    );
  }, [imageUri]);

  return (
    <View style={ContainerStyles.center}>
      <TouchableOpacity onPress={exit} style={ImageModalStyles.exitButton}>
        <Ionicons name="close" size={30} />
      </TouchableOpacity>
      {imageHeight ? (
        <AnimatedImage imageUri={imageUri} imageHeight={imageHeight} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default ImageModal;
