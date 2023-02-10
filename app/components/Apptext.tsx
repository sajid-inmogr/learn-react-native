import React, {PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  Falsy,
  RegisteredStyle,
  RecursiveArray,
} from 'react-native';

interface textProps extends PropsWithChildren {
  style:
    | TextStyle
    | Falsy
    | RegisteredStyle<TextStyle>
    | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>;
}

const AppText: React.FC<textProps> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
