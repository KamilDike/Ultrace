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
import {ContainerStyles} from '../../styles/ContainerStyles';
import {TextStyles} from '../../styles/TextStyles';
import auth from '@react-native-firebase/auth';
import {SocialLogoEnum} from '../../enums/AuthEnum';

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
          <TouchableOpacity onPress={() => auth().signInAnonymously()}>
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
