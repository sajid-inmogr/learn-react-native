import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import AppText from './Apptext';

import colors from '../config/colors';

interface IListItemCompProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}
function ListItem({title, subTitle, image}: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
