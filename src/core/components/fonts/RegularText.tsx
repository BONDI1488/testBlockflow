import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface Props {
  children: any;
  style?: TextStyle;
}

export const RegularText: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22.4,
  },
});
