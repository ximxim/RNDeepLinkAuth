import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { useContext, FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { AuthenticationContext } from '../components';
import { useURL } from '../hooks';

import { HomeStack } from './HomeStack';
import { OnboardingStack } from './OnboardingStack';

enableScreens();
const Stack = createNativeStackNavigator();

export const SwitchNavigation: FunctionComponent<unknown> = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const link = useURL();

  console.log(link);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
