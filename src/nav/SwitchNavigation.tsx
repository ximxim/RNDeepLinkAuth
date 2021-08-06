import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { useContext, FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { AuthenticationContext, HeaderRight } from '../components';

import { HomeStack } from './HomeStack';
import { OnboardingStack } from './OnboardingStack';

enableScreens();
const Stack = createNativeStackNavigator();

export const SwitchNavigation: FunctionComponent<unknown> = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(
    AuthenticationContext,
  );

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
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'After Auth' }}
        />
      ) : (
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{ title: 'Before Auth' }}
        />
      )}
    </Stack.Navigator>
  );
};
