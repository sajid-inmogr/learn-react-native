import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ListItem from '../components/LIstitem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];
// const messagetype = typeof initialMessages
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message: {
    id: number;
    title: string;
    description: string;
    image: any;
  }) => {
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
