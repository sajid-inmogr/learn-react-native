import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
} from 'react-native';
import AppText from './Apptext';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';

interface IListItemCompProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions?: any;
}
const ListItem: React.FC<IListItemCompProps> = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

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
