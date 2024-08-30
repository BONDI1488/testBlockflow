import React, {useState} from 'react';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
import {H1Text} from 'src/core/components/fonts/H1Text.tsx';
import {RegularText} from 'src/core/components/fonts/RegularText.tsx';
import {PrimaryInputMask} from 'src/core/components/PrimaryInputMask.tsx';
import {PrimaryButton} from 'src/core/components/PrimaryButton.tsx';
import {checkEmptyStrings} from 'src/core/functions';
import {ButtonText} from 'src/core/components/ButtonText.tsx';
import {useNavigation} from '@react-navigation/native';
import {RouteKey} from 'src/core/typing/enums/navigator.ts';
import { colors } from "src/core/typing/enums/colors.ts";

export const SignIn = () => {
  const [phoneNumber, swtPhoneNumber] = useState('');
  const navigation: any = useNavigation();

  const handlePhoneNumberChange = (text: string) => {
    swtPhoneNumber(text);
  };
  return (
    <PrimaryWrapper>
      <H1Text style={styles.h1Text}>Welcome to App</H1Text>
      <RegularText style={styles.regularText}>
        Please enter your details.
      </RegularText>
      <PrimaryInputMask
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="+38 111 333 2222"
        mask="+38 999 999 9999"
        text={'Phone number'}
        keyboardType="phone-pad"
        secureTextEntry={false}
        style={styles.primaryInputMask}
      />
      <PrimaryButton
        label={'Login'}
        onPress={() => {
          console.log('phoneNumber', phoneNumber);
        }}
        style={styles.primaryButton}
        isDesable={checkEmptyStrings(phoneNumber)}
      />
      <View style={styles.container}>
        <Text style={styles.textStyle}>Don’t have an account?</Text>
        <ButtonText
          label={' Sign up'}
          onPress={() => {
            navigation.navigate(RouteKey.SignUp);
          }}
          fontSize={14}
        />
      </View>
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'rgba(114, 116, 119, 1)',
    fontSize: 14,
  },
  primaryButton: {
    marginTop: 24,
  },
  primaryInputMask: {
    marginTop: 40,
  },
  h1Text: {
    marginTop: 120,
    alignSelf: 'center',
    color: colors.black,
  },
  regularText: {
    color: 'rgba(102, 112, 133, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 6,
  },
});
