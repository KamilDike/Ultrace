import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SocialLogoEnum} from '../../../enums/auth.enum';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthButtonStyle} from './AuthButtonStyle';
import {ColorStyles} from '../../../styles/ColorStyles';
import {TextStyles} from '../../../styles/TextStyles';
import {onGoogleButtonPress} from '../../../services/firebaseSignIn';

interface AuthButtonProps {
  provider: SocialLogoEnum;
}

const AuthButton: React.FC<AuthButtonProps> = ({provider}) => {
  return (
    <TouchableOpacity
      style={AuthButtonStyle.container}
      onPress={onGoogleButtonPress}>
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
