/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './app/screens/Welcome.screen';
import ViewImageScreen from './app/screens/View.screen';
import DemoScreens from './app/screens/Demo.screens';
import ListingDetailsScreen from './app/screens/ListingDetails.screen';
import MessagesScreen from './app/screens/Messages.screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AccountScreen from './app/screens/Accounts.Screen';
import ListingScreen from './app/screens/Listing.screen';
import PickerScreen from './app/screens/Picker.screen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}
        {/* <ListingScreen /> */}
        {/* <ListingDetailsScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <AccountScreen /> */}
        <PickerScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
