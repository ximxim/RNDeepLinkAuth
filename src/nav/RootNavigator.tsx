import { InteractionManager } from 'react-native';
import { LinkingOptions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { FunctionComponent, useEffect, useCallback } from 'react';

import {
  DeepLinkSchema,
  navigationRef,
  checkDeepLinkResult,
} from '../services';
import { SwitchNavigation } from './SwitchNavigation';
import { useURL, DeepLinkEnum, useDeepLinks } from '../hooks';

export const linking: LinkingOptions<any> = {
  prefixes: [DeepLinkSchema],
  config: {
    screens: {
      OnboardingStack: {
        screens: {
          SignUp: 'signup',
        },
      },
      HomeStack: {
        screens: {
          Profile: 'profile',
        },
      },
    },
  },
};

export const RootNavigator: FunctionComponent<unknown> = () => {
  const { addDeepLink } = useDeepLinks();
  const link = useURL();

  const handleDeepLink = useCallback(
    (url: string) => {
      const task = InteractionManager.runAfterInteractions(() => {
        const { didDeepLinkLand, action, linkPath } = checkDeepLinkResult(url);
        if (!didDeepLinkLand) {
          addDeepLink({
            id: linkPath,
            type: DeepLinkEnum.NAVIGATION,
            action: () => navigationRef.current?.dispatch(action),
          });
        }
      });

      return () => task.cancel();
    },
    [navigationRef],
  );

  useEffect(() => {
    if (!link) {
      return;
    }

    handleDeepLink(link);
  }, [link]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <SwitchNavigation />
    </NavigationContainer>
  );
};
