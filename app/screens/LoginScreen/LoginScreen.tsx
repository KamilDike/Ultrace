import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {LoginScreenStyles} from './LoginScreenStyles';
import AuthButton from './AuthButton/AuthButton';
import {SocialLogoEnum} from '../../enums/auth.enum';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {TextStyles} from '../../styles/TextStyles';

const LoginScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/loginBackground.jpg')}
      style={LoginScreenStyles.backgroundImage}>
      <SafeAreaView style={ContainerStyles.center}>
        <View style={LoginScreenStyles.appNameContainer}>
          <Text style={LoginScreenStyles.appNameText}>Ultrace</Text>
        </View>
        <View style={LoginScreenStyles.buttonsContainer}>
          <AuthButton provider={SocialLogoEnum.GOOGLE} />
          <AuthButton provider={SocialLogoEnum.APPLE} />
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
