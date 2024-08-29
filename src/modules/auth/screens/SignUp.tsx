import React, {useState} from 'react';
import {PrimaryWrapper} from 'src/core/components/PrimaryWrapper.tsx';
import {H1Text} from 'src/core/components/fonts/H1Text.tsx';
import {PrimaryInput} from 'src/core/components/PrimaryInput.tsx';

export const SignUp = () => {
  const [name, setName] = useState('');
  const handleInputChange = (text: string) => {
    setName(text);
  };
  return (
    <PrimaryWrapper>
      <H1Text>SignUp</H1Text>
      <PrimaryInput
        value={name}
        onChangeText={handleInputChange}
        placeholder="Enter name"
        keyboardType="default"
        secureTextEntry={false}
      />
    </PrimaryWrapper>
  );
};
