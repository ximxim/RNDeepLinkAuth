import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { CenteredView } from '../components';

export const Home: FunctionComponent<unknown> = () => {
  return (
    <CenteredView>
      <Text>Home</Text>
    </CenteredView>
  );
};
