import React from 'react';
import {RouteKey} from 'src/core/typing/enums/navigator.ts';
import {OnBoarding} from 'src/modules/auth/screens/OnBoarding.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteKey.OnBoarding} component={OnBoarding} />
    </Stack.Navigator>
  );
};
