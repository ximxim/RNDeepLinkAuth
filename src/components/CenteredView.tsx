import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

export const CenteredView: FunctionComponent<ViewProps> = ({
  children,
  ...viewProps
}) => {
  return (
    <View style={styles.view} {...viewProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
