import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Login"
          color={colors.primary}
          onPress={() => console.log('pressed reg')}
        />
        <CustomButton
          title="Register"
          color={colors.secondary}
          onPress={() => console.log('pressed reg')}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    // flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
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
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
