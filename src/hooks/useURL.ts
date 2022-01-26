import { useEffect } from 'react';
import { Linking } from 'react-native';

export const useURL = (handleUrlChange: ({ url }: { url: string }) => void) => {
  useEffect(() => {
    (async () => {
      const initialUrl = await Linking.getInitialURL();

      if (!initialUrl) {
        return;
      }

      handleUrlChange({ url: initialUrl });
    })();

    Linking.addEventListener('url', handleUrlChange);

    return () => Linking.removeEventListener('url', handleUrlChange);
  }, []);
  return null;
};
