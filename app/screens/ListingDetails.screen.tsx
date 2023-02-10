import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const ListingDetailsScreen = () => {
  return (
    <View>
      {' '}
      <Card
        image={require('../assets/jacket.jpg')}
        title="something title"
        subTitle="something title"
      />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({});
