import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from 'src/core/typing/enums/colors.ts';

interface PrimaryInput {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  text: string;
  errorChecker?: string;
}

export const PrimaryInput = ({
  value,
  onChangeText,
  style,
  secureTextEntry,
  keyboardType,
  placeholder,
  text,
}: PrimaryInput) => {
  return (
    <View style={style}>
      <Text style={styles.textStyle}>{text}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input]}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(208, 213, 221, 1)',
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontSize: 16,
    height: 40,
    paddingHorizontal: 14,
    color: colors.black,
  },
  text: {
    backgroundColor: 'transparent',
    zIndex: 10,
    position: 'absolute',
    top: 35,
    fontSize: 14,
  },
  textStyle: {
    marginBottom: 6,
    color: 'rgba(52, 64, 84, 1)',
  },
});
