import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { Home } from '../screens';

const Stack = createNativeStackNavigator();

export const HomeStack: FunctionComponent<unknown> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
