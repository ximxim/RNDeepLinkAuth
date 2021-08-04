import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { useDeepLinks, DeepLinkEnum } from '../hooks';
import { CenteredView } from '../components';

export const Home: FunctionComponent<unknown> = () => {
  useDeepLinks([DeepLinkEnum.NAVIGATION]);

  return (
    <CenteredView>
      <Text>Home</Text>
    </CenteredView>
  );
};
