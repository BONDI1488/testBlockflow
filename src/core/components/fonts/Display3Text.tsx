import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

interface Props {
  children: any;
  style?: TextStyle;
}

export const Display3Text: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 32,
    lineHeight: 38.4,
  },
});
