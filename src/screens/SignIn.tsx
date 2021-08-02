import React, { useContext, FunctionComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AuthenticationContext, CenteredView } from '../components';

export const SignIn: FunctionComponent<unknown> = () => {
  const { setIsAuthenticated } = useContext(AuthenticationContext);

  return (
    <CenteredView>
      <Text>Sign In Screen</Text>
      <TouchableOpacity onPress={() => setIsAuthenticated(true)}>
        <Text>Log in</Text>
      </TouchableOpacity>
    </CenteredView>
  );
};
