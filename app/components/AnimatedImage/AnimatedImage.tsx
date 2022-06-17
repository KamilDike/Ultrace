import React from 'react';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import {config} from '../../config';
import {AnimatedImageStyles} from './AnimatedImageStyles';

interface AnimatedImageProps {
  imageUri: string;
  imageHeight: number;
}

const AnimatedImage = ({imageUri, imageHeight}: AnimatedImageProps) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      }
    });

  const animateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -config.screenWidth / 2},
        {translateY: -imageHeight / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: config.screenWidth / 2},
        {translateY: imageHeight / 2}
      ]
    };
  });

  return (
    <GestureHandlerRootView>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.Image
          source={{uri: imageUri}}
          style={[
            animateStyle,
            AnimatedImageStyles.imageContainer,
            {height: imageHeight}
          ]}
        />
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default AnimatedImage;
