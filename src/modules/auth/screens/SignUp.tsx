import React, {useState} from 'react';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {H1Text} from 'src/core/components/fonts/H1Text.tsx';
import {PrimaryInput} from 'src/core/components/PrimaryInput.tsx';
import {RegularText} from 'src/core/components/fonts/RegularText.tsx';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from 'src/core/components/PrimaryButton.tsx';
import {ButtonText} from 'src/core/components/ButtonText.tsx';
import {useNavigation} from '@react-navigation/native';
import {RouteKey} from 'src/core/typing/enums/navigator.ts';
import {PrimaryInputMask} from 'src/core/components/PrimaryInputMask.tsx';
import {checkEmptyStrings} from 'src/core/functions';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigation: any = useNavigation();

  const Press = () => {
    console.log('name', name);
    console.log('lastName', lastName);
    console.log('phoneNumber', phoneNumber);
    if (phoneNumber.length === 16) {
      navigation.navigate(RouteKey.SignUpPhoneVerification);
    } else {
      setError('');
    }
  };
  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  return (
    <PrimaryWrapper>
      <H1Text style={styles.h1Text}>Welcome to App</H1Text>
      <RegularText style={styles.regularText}>
        Please enter your details.
      </RegularText>
      <PrimaryInput
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter name"
        keyboardType="default"
        secureTextEntry={false}
        text={'Name'}
        style={styles.primaryInput}
      />
      <PrimaryInput
        value={lastName}
        onChangeText={handleLastNameChange}
        placeholder="Enter last name"
        keyboardType="default"
        secureTextEntry={false}
        text={'Last Name'}
        style={styles.primaryInput}
      />
      <PrimaryInputMask
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="+38 111 333 2222"
        keyboardType="phone-pad"
        secureTextEntry={false}
        text={'Phone number'}
        style={styles.primaryInput}
        mask="+38 999 999 9999"
      />
      <PrimaryButton
        label={'Continue'}
        onPress={() => {
          Press();
        }}
        style={styles.primaryButton}
        isDesable={checkEmptyStrings(name, lastName, phoneNumber)}
      />
      <View style={styles.container}>
        <Text style={styles.textStyle}>Do you have an account?</Text>
        <ButtonText
          label={' Login'}
          onPress={() => {
            navigation.navigate(RouteKey.SignIn);
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
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'rgba(114, 116, 119, 1)',
    fontSize: 14,
  },
  h1Text: {
    marginTop: 120,
    alignSelf: 'center',
  },
  regularText: {
    color: 'rgba(102, 112, 133, 1)',
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  primaryInput: {
    marginTop: 20,
  },
  primaryButton: {
    marginTop: 16,
  },
});
