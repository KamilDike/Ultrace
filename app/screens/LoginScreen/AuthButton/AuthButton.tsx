import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AuthEnum} from '../../../enums/auth.enum';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthButtonStyle} from './AuthButtonStyle';
import {ColorStyles} from '../../../styles/ColorStyles';
import {TextStyles} from '../../../styles/TextStyles';

interface AuthButtonProps {
  provider: AuthEnum;
}

const AuthButton: React.FC<AuthButtonProps> = ({provider}) => {
  return (
    <TouchableOpacity style={AuthButtonStyle.container}>
      <Icon
        name={provider.toLowerCase()}
        size={25}
        color={ColorStyles.dark}
        style={AuthButtonStyle.providerIconStyle}
      />
      <Text style={TextStyles.header}>Sign in with {provider}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
