import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface Props {
  children: any;
  style?: TextStyle;
}

export const H1Text: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 24,
    lineHeight: 28.8,
  },
});
