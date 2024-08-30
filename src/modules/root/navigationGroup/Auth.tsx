import React from 'react';
import {RouteKey} from 'src/core/typing/enums/navigator.ts';
import {OnBoarding} from 'src/modules/auth/screens/OnBoarding.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from 'src/modules/auth/screens/SignUp.tsx';
import {SignUpPhoneVerification} from 'src/modules/auth/screens/SignUpPhoneVerification.tsx';
import {SignIn} from 'src/modules/auth/screens/SignIn.tsx';

export const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteKey.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={RouteKey.SignUp} component={SignUp} />
      <Stack.Screen
        name={RouteKey.SignUpPhoneVerification}
        component={SignUpPhoneVerification}
      />
      <Stack.Screen name={RouteKey.SignIn} component={SignIn} />
    </Stack.Navigator>
  );
};
