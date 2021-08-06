import React, { FunctionComponent } from 'react';

import { useDeepLinks, DeepLinkEnum } from '../hooks';
import { CenteredView, Text } from '../components';

export const Home: FunctionComponent<unknown> = () => {
  useDeepLinks([DeepLinkEnum.NAVIGATION]);

  return (
    <CenteredView backgroundColor="#5b641c">
      <Text>Home</Text>
    </CenteredView>
  );
};
