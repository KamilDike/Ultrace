import React, {useContext} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {SocialLogoEnum} from '../../../enums/AuthEnum';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthButtonStyle} from './AuthButtonStyle';
import {ColorStyles} from '../../../styles/ColorStyles';
import {TextStyles} from '../../../styles/TextStyles';
import {
  ApplicationContext,
  ApplicationContextType
} from '../../../context/ApplicationContext';
import auth from '@react-native-firebase/auth';
import {onGoogleButtonPress} from '../../../services/firebaseSignIn';

interface AuthButtonProps {
  provider: SocialLogoEnum;
}

const AuthButton: React.FC<AuthButtonProps> = ({provider}) => {
  const {toggleLoading} = useContext(
    ApplicationContext
  ) as ApplicationContextType;

  function providerLiteral() {
    if (provider === SocialLogoEnum.APPLE) Alert.alert('Not yet supported');
    else if (provider === SocialLogoEnum.GOOGLE)
      onGoogleButtonPress().then(googleCredential => {
        toggleLoading(true);
        auth()
          .signInWithCredential(googleCredential)
          .then(() => toggleLoading(false));
      });
  }

  return (
    <TouchableOpacity
      style={AuthButtonStyle.container}
      onPress={providerLiteral}>
      <Ionicons
        name={`logo-${provider.toLowerCase()}`}
        size={25}
        color={ColorStyles.dark}
        style={AuthButtonStyle.providerIconStyle}
      />
      <Text style={TextStyles.header}>Sign in with {provider}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
