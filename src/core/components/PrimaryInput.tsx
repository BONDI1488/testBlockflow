import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet, Text,
  TextInput,
  View,
  ViewStyle
} from "react-native";
import {colors} from 'src/core/typing/enums/color.ts';

interface PrimaryInput {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errorChecker?: string;
}

export const PrimaryInput = ({
  value,
  onChangeText,
  style,
  secureTextEntry,
  keyboardType,
  placeholder,
}: PrimaryInput) => {
  return (
    <View style={style}>
      <Text>{placeholder}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input]}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontSize: 16,
    height: 40,
    color: colors.grayForInput,
  },
  text: {
    backgroundColor: 'transparent',
    zIndex: 10,
    position: 'absolute',
    top: 35,
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Regular',
  },
});
