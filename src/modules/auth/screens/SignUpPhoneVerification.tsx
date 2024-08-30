import React, {useState, useEffect, Fragment} from 'react';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
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
  const [isFocused, setIsFocused] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timer, setTimer] = useState(10);
  const startTimer = () => {
    setIsTimerActive(true);
    setTimer(10);
  };
  const handleChangeText = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setValue(numericValue);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            clearInterval(interval!);
            setIsTimerActive(false);
            return 10;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerActive]);

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
        onChangeText={handleChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        renderCell={({index, symbol, isFocused}) => (
          <Fragment key={index}>
            <View
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                symbol && styles.filledCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text
                style={[
                  styles.cellText,
                  !symbol && !isFocused && styles.placeholder,
                ]}>
                {symbol || (isFocused ? <Cursor /> : '0')}
              </Text>
            </View>
            {index === 2 ? (
              <View key={`separator-${index}`} style={styles.separator} />
            ) : null}
          </Fragment>
        )}
      />
      {isTimerActive ? (
        <Text style={styles.timerText}>
          Resend available in {timer} seconds
        </Text>
      ) : (
        <ButtonText
          label={'Resend the Code'}
          onPress={startTimer}
          fontSize={14}
          style={styles.buttonText}
        />
      )}
      <PrimaryButton
        label={'Sign up'}
        onPress={() => {
          console.log(value);
        }}
        style={styles.primaryButton}
        isDesable={checkEmptyStrings(value)}
      />
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  timerText: {
    alignSelf: 'center',
    marginTop: 32,
    fontSize: 14,
    color: 'rgba(102, 112, 133, 1)',
  },
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
    color: colors.black,
  },
  regularText: {
    color: 'rgba(102, 112, 133, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 6,
  },
  codeFieldRoot: {
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'rgba(52, 64, 84, 1)',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 40,
  },
  cell: {
    width: 52,
    height: 64,
    borderWidth: 1,
    borderColor: 'rgba(208, 213, 221, 1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    position: 'relative',
  },
  focusCell: {
    borderColor: 'rgba(112, 96, 183, 1)',
  },
  filledCell: {
    borderColor: 'rgba(112, 96, 183, 1)',
  },
  cellText: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 40,
    color: colors.mainAction,
  },
  placeholder: {
    color: 'rgba(208, 213, 221, 1)',
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
    marginHorizontal: 4,
  },
});
