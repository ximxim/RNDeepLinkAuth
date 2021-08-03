import React, { FunctionComponent } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Text,
} from 'react-native';

export const HeaderRight: FunctionComponent<TouchableOpacityProps> = ({
  children,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...touchableProps}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  text: {},
});
