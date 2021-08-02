import { Linking } from 'react-native';
import { LinkingOptions } from '@react-navigation/native';
import React, { FunctionComponent, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SwitchNavigation } from './src/nav';
import { AuthenticationProvider } from './src/components';

const App: FunctionComponent<{ initialURL?: string }> = ({ initialURL }) => {
  useEffect(() => {
    if (!initialURL) {
      return;
    }

    Linking.openURL(initialURL);
  }, [initialURL]);

  const linking: LinkingOptions<any> = {
    prefixes: ['RNDeepLinkAuth://'],
    config: {
      screens: {
        OnboardingStack: {
          screens: {
            SignUp: 'signup/:token',
          },
        },
      },
    },
  };

  return (
    <AuthenticationProvider>
      <NavigationContainer linking={linking}>
        <SwitchNavigation />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};

export default App;
