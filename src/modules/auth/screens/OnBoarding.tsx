import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {PrimaryButton} from 'src/core/components/PrimaryButton.tsx';
import {SecondaryButton} from 'src/core/components/SecondaryButton.tsx';
import {Display3Text} from 'src/core/components/fonts/Display3Text.tsx';
import {PlainText} from 'src/core/components/fonts/PlainText.tsx';
import {useNavigation} from '@react-navigation/native';
import {RouteKey} from 'src/core/typing/enums/navigator.ts';
import { colors } from "src/core/typing/enums/colors.ts";

export const OnBoarding = () => {
  const navigation: any = useNavigation();

  return (
    <PrimaryWrapper>
      <Image
        source={require('src/assets/images/Group6417.png')}
        style={styles.image}
      />
      <Display3Text style={styles.display3Text}>Welcome to App</Display3Text>
      <PlainText style={styles.plainText}>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        augue. Neque at felis pulvinar malesuada varius egestas dis cras.
      </PlainText>
      <PrimaryButton
        label={'Login'}
        onPress={() => {
          navigation.navigate(RouteKey.SignIn);
        }}
        style={styles.primaryButton}
      />
      <SecondaryButton
        label={'Register'}
        onPress={() => {
          navigation.navigate(RouteKey.SignUp);
        }}
        style={styles.secondaryButton}
      />
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 80,
    width: 380,
    height: 290,
    alignSelf: 'center',
  },
  secondaryButton: {
    marginTop: 8,
  },
  display3Text: {
    marginTop: 55,
    color: colors.black,
  },
  plainText: {
    marginTop: 16,
    color: colors.black,
  },
  primaryButton: {
    marginTop: 32,
  },
});
