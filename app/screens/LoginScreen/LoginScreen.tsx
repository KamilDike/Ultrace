import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginScreenStyle} from './LoginScreenStyle';
import AuthButton from './AuthButton/AuthButton';
import {AuthEnum} from '../../enums/auth.enum';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {isAndroid} from '../../hooks/isAndroid';
import {TextStyles} from '../../styles/TextStyles';

const LoginScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/loginBackground.jpg')}
      style={LoginScreenStyle.backgroundImage}>
      <SafeAreaView style={ContainerStyles.center}>
        <View style={LoginScreenStyle.appNameContainer}>
          <Text style={LoginScreenStyle.appNameText}>Ultrace</Text>
        </View>
        <View style={LoginScreenStyle.buttonsContainer}>
          <AuthButton
            provider={isAndroid() ? AuthEnum.GOOGLE : AuthEnum.APPLE}
          />
          <TouchableOpacity>
            <Text style={[TextStyles.title, TextStyles.whiteColor]}>
              Continue as guest
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
