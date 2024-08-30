import React, {useState} from 'react';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {StyleSheet, Text} from 'react-native';
import {H1Text} from 'src/core/components/fonts/H1Text.tsx';
import {RegularText} from 'src/core/components/fonts/RegularText.tsx';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from 'src/core/typing/enums/colors.ts';
import {ButtonText} from 'src/core/components/ButtonText.tsx';
import {PrimaryButton} from 'src/core/components/PrimaryButton.tsx';
import {checkEmptyStrings} from 'src/core/functions';

const CELL_COUNT = 6;

export const SignUpPhoneVerification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <PrimaryWrapper>
      <H1Text style={styles.h1Text}>Welcome to App</H1Text>
      <RegularText style={styles.regularText}>
        Enter the confirmation code that will be sent to you by SMS
      </RegularText>
      <Text style={styles.textStyle}>Secure Code</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <ButtonText
        label={'Resend the Code'}
        onPress={() => {
          console.log('kjsdfjsjkdlkjflkj');
        }}
        fontSize={14}
        style={styles.buttonText}
      />
      <PrimaryButton
        label={'Sign up'}
        onPress={() => {
          console.log('asdjkkj');
        }}
        style={styles.primaryButton}
        isDesable={checkEmptyStrings(value)}
      />
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    marginTop: 32,
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 32,
  },
  h1Text: {
    marginTop: 120,
    alignSelf: 'center',
  },
  regularText: {
    color: 'rgba(102, 112, 133, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 6,
  },
  cell: {
    width: 52,
    height: 64,
    fontSize: 40,
    fontFamily: 'Outfit-SemiBold',
    borderWidth: 1,
    borderColor: colors.black,
    color: colors.black,
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  codeFieldRoot: {
    marginTop: 6,
  },
  textStyle: {
    color: 'rgba(52, 64, 84, 1)',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 40,
  },
});
