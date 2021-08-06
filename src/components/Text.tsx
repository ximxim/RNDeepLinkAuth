import React, { FunctionComponent } from 'react';
import {
  TextProps,
  StyleSheet,
  ColorValue,
  Text as RNText,
} from 'react-native';

interface ITextProps extends TextProps {
  backgroundColor?: ColorValue;
}

export const Text: FunctionComponent<ITextProps> = ({
  children,
  backgroundColor,
  ...textProps
}) => {
  return (
    <RNText style={[styles.text, { backgroundColor }]} {...textProps}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'white',
    letterSpacing: 5,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    textTransform: 'uppercase',
  },
});
