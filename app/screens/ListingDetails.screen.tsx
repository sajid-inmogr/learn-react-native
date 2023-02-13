import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import colors from '../config/colors';
import ListItem from '../components/LIstitem';
const ListingDetailsScreen = () => {
  return (
    <View>
      <Card
        image={require('../assets/jacket.jpg')}
        title="something title"
        subTitle="$350"
      />
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title="Mosh Hamedani"
          subTitle="5 Listings"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  // detailsContainer: {
  //   padding: 20,
  // },
  // image: {
  //   width: '100%',
  //   height: 300,
  // },
  // price: {
  //   color: colors.secondary,
  //   fontWeight: 'bold',
  //   fontSize: 20,
  //   marginVertical: 10,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: '500',
  // },
  userContainer: {
    // marginVertical: 20,
  },
});
