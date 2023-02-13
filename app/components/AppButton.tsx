import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
interface AppButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}
const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  color = 'primary',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
