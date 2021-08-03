import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { useContext, FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { AuthenticationContext, HeaderRight } from '../components';
import { useURL } from '../hooks';

import { HomeStack } from './HomeStack';
import { OnboardingStack } from './OnboardingStack';

enableScreens();
const Stack = createNativeStackNavigator();

export const SwitchNavigation: FunctionComponent<unknown> = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(
    AuthenticationContext,
  );
  const link = useURL();

  console.log(link);

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <HeaderRight onPress={() => setIsAuthenticated(!isAuthenticated)}>
            {isAuthenticated ? 'Log out' : 'Log in'}
          </HeaderRight>
        ),
      }}>
      {isAuthenticated ? (
        <Stack.Screen name="HomeStack" component={HomeStack} />
      ) : (
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      )}
    </Stack.Navigator>
  );
};
