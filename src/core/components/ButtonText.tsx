import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from 'src/core/typing/enums/colors.ts';

interface ButtonProps {
  label: string;
  onPress: () => void;
  fontSize: number;
  style?: any;
  isDesable?: boolean;
}
export const ButtonText = ({
  label,
  onPress,
  style,
  isDesable,
  fontSize,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDesable}
      style={[style, {}]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            fontSize: fontSize,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 600,
    color: colors.secondaryAction,
    textDecorationLine: 'underline',
    textDecorationColor: colors.secondaryAction,
  },
});
