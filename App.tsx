import { Linking } from 'react-native';
import React, { FunctionComponent, useEffect } from 'react';

import { RootNavigator } from './src/nav';
import { AuthenticationProvider, DeepLinkProvider } from './src/components';

const App: FunctionComponent<{ initialURL?: string }> = ({ initialURL }) => {
  useEffect(() => {
    if (!initialURL) {
      return;
    }

    Linking.openURL(initialURL);
  }, [initialURL]);

  return (
    <DeepLinkProvider>
      <AuthenticationProvider>
        <RootNavigator />
      </AuthenticationProvider>
    </DeepLinkProvider>
  );
};

export default App;
