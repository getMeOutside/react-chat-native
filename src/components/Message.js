import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Message = ({item}) => {
  return (
    <>
      <Text style={styles.date}>Monday 9:38 AM</Text>
      <View style={styles.messageContainer(item?.owner)}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => console.log('go to profile')}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </TouchableOpacity>

        <View style={styles.content(item?.owner)}>
          <Text style={styles.userName(item?.owner)}>Name Surname</Text>
          <TouchableOpacity
            onPress={() => console.log('react on message')}
            style={styles.item(item?.owner)}
            activeOpacity={0.5}>
            <Text style={styles.text(item?.owner)}>{item.text}</Text>
            <Text style={styles.messageDate(item?.owner)}>10:53</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: isOwner => ({
    flexDirection: isOwner ? 'row-reverse' : 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  }),
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  content: isOwner => ({
    display: 'flex',
    alignItems: isOwner ? 'flex-end' : 'flex-start',
    justifyContent: isOwner ? 'flex-end' : 'flex-start',
    textAlign: isOwner ? 'end' : 'start',
    marginHorizontal: 5,
    width: '100%',
  }),
  item: isOwner => ({
    flex: 1,
    alignSelf: isOwner ? 'flex-end' : 'flex-start',
    maxWidth: '75%',
    backgroundColor: isOwner ? '#0078FF' : '#E9E9EB',
    color: isOwner ? 'white' : 'black',
    paddingVertical: 7,
    paddingHorizontal: 12,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
  }),
  userName: isOwner => ({
    fontSize: 12,
    marginLeft: isOwner ? 0 : 12,
    marginRight: isOwner ? 12 : 0,
    marginBottom: 1,
    color: '#909093',
  }),
  text: isOwner => ({
    color: isOwner ? '#fff' : '#000',
    fontSize: 15,
  }),
  date: {
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 10,
    color: '#909093',
  },
  messageDate: isOwner => ({
    textAlign: 'right',
    fontSize: 10,
    color: isOwner ? '#3A3A3A' : '#909093',
  }),
});

export default Message;
