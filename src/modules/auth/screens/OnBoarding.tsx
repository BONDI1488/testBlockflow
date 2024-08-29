import React from 'react';
import {Text} from 'react-native';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {PrimaryButton} from 'src/core/components/PrimaryButton.tsx';
import {SecondaryButton} from 'src/core/components/SecondaryButton.tsx';

export const OnBoarding = () => {
  return (
    <PrimaryWrapper>
      <Text>OnBoarding</Text>
      <PrimaryButton
        label={'Login'}
        onPress={() => {
          console.log('sosi');
        }}
      />
      <SecondaryButton
        label={'Register'}
        onPress={() => {
          console.log('asdasd');
        }}
      />
    </PrimaryWrapper>
  );
};
