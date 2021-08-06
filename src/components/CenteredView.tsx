import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ViewProps, ColorValue } from 'react-native';

interface IViewProps extends ViewProps {
  backgroundColor?: ColorValue;
}

export const CenteredView: FunctionComponent<IViewProps> = ({
  children,
  backgroundColor,
  ...viewProps
}) => {
  return (
    <View style={[styles.view, { backgroundColor }]} {...viewProps}>
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
