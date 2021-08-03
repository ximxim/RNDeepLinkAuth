import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { Home, Profile } from '../screens';

const Stack = createNativeStackNavigator();

export const HomeStack: FunctionComponent<unknown> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
