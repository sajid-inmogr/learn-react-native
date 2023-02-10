import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../components/CustomButton';
import colors from '../config/colors';

const DemoScreens = () => {
  return (
    <View>
      <Text>DemoScreens</Text>
      <Icon name="mail" size={30} color="#4ecdc4" />
      <CustomButton
        title="login"
        onPress={() => {
          console.log('print');
        }}
        color={colors.primary}
      />
    </View>
  );
};

export default DemoScreens;

const styles = StyleSheet.create({});
