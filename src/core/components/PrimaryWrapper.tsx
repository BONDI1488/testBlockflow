import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface PrimeryWrapperProps {
  children: React.ReactNode;
  wrapperStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

export const PrimaryWrapper = ({
  children,
  wrapperStyle,
  contentStyle,
}: PrimeryWrapperProps) => {
  return (
    <SafeAreaView style={[styles.wrapper, wrapperStyle]}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.globalContainer}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    marginHorizontal: 16,
    flex: 1,
  },
  globalContainer: {
    flexGrow: 1,
  },
});
