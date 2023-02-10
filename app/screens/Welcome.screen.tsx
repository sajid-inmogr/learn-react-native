import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text>login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text>register</Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    display: 'flex',
    height: '100%',
    // flex: 1, // if this us enable the button do not show investigate later
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});
export default WelcomeScreen;
