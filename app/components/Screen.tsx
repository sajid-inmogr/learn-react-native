import React, {PropsWithChildren} from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
type ScreenProps = PropsWithChildren<{
  style?: object;
}>;

const Screen: React.FC<ScreenProps> = ({children, style}) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  view: {
    // flex: 1,
  },
});

export default Screen;
