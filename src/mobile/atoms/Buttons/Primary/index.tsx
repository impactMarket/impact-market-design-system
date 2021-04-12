import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Button as RNPButton} from 'react-native-paper';

import { ipctColors } from '../../../styles/index';

interface IButtonProps {
  modeType: 'green' | 'gray' | 'default';
  type: 'text' | 'outlined' | 'contained'
  bold?: boolean;
  icon?: string;
  children?: any;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const colors = {
  "green" : ipctColors.white,
  "gray": ipctColors.darkGray,
  "default": ipctColors.white
}

export const Button: React.FC<IButtonProps> = ({ type, style, disabled, children, modeType, bold }) => {

  let buttonStyle: StyleProp<ViewStyle> = {
    elevation: 0,
    height: 42,
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
};

if (!disabled) {
    if (modeType === 'green') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: ipctColors.greenishTeal,
        };
    } else if (modeType === 'gray') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: ipctColors.softGray,
        };
    } else if (modeType === 'default') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: ipctColors.blueRibbon,
        };
    } else {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: ipctColors.blueRibbon,
        };
    }
}
if (style) {
    buttonStyle = { ...buttonStyle, ...(style as any) };
}

return (

  <RNPButton
  mode={type}
  uppercase={false}
  style={buttonStyle}
  labelStyle={{
    color: disabled ? ipctColors.white : colors[modeType],
    fontFamily: bold ? 'Gelion-Bold' : 'Gelion-Regular',
    fontSize: 15,
    lineHeight: 17.58,
  }}
  >
    {children}
  </RNPButton>
)
}

export default Button