import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from 'src/core/typing/enums/colors.ts';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  isDesable?: boolean;
}

export const PrimaryButton = ({
  label,
  onPress,
  style,
  isDesable,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDesable}
      style={[
        style,
        {
          alignSelf: 'center',
          width: '100%',
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isDesable ? colors.desableAction : colors.mainAction,
          borderRadius: 8,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontWeight: 600,
          color: colors.white,
          fontSize: 16,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
