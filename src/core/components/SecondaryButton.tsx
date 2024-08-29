import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from 'src/core/typing/enums/color.ts';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  isDesable?: boolean;
}

export const SecondaryButton = ({
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
          borderRadius: 8,
          borderColor: colors.gray,
          borderWidth: 1,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontWeight: 600,
          color: colors.black,
          fontSize: 16,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
