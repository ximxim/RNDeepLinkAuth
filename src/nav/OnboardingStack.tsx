import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { SignIn, SignUp } from '../screens';

const Stack = createNativeStackNavigator();

export const OnboardingStack: FunctionComponent<unknown> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
