import { useEffect, useCallback, useState } from 'react';
import { Linking } from 'react-native';

export const useURL = () => {
  const [link, setLink] = useState<string>();
  const handleUrlChange = useCallback(({ url }: { url: string }) => {
    setLink(url);
  }, []);

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

  return link;
};
