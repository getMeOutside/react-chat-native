import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const HeaderItem = ({item, index, swiper, currentColor}) => {
  const {title, hasNewMessages} = item;

  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      activeOpacity={0.5}
      onPress={() => swiper.current.scrollBy(index)}>
      {hasNewMessages && <View style={styles.indicator} />}
      <Text style={styles.categoryName(currentColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export const HeaderItems = ({activeTab, swiper, color, secondaryColor}) => {
  const {categories} = useSelector(state => state.chatsSlice);

  return (
    <View style={styles.header}>
      {categories.map((item, index) => {
        const isActive = activeTab === index;
        const currentColor = isActive ? color : secondaryColor;

        return (
          <View style={styles.headerGroup} key={`category-${index}`}>
            <HeaderItem
              item={item}
              index={index}
              swiper={swiper}
              currentColor={currentColor}
            />
          </View>
        );
      })}
    </View>
  );
};

export const ChatItem = item => {
  const {userName, chatName, avatar, text, date, lastMessage} = item.item;
  const groutChatMessage =
    lastMessage && `${lastMessage.authorName}: ${lastMessage.text}`;
  const {dark, colors} = useSelector(state => state.theme);
  const {color, secondaryColor, driverColor} = dark
    ? colors.dark
    : colors.white;

  return (
    <TouchableOpacity style={styles.message(driverColor)}>
      <Image style={styles.messageAvatar} source={{uri: avatar}} />
      <View style={styles.info}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName(color)}>{userName || chatName}</Text>
          <Text style={{color: secondaryColor}}>{'>'}</Text>
        </View>
        <Text style={styles.messageText}>{text || groutChatMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  headerGroup: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#3478F6',
    marginRight: 5,
  },
  categoryName: currentColor => ({
    fontSize: 15,
    color: currentColor,
  }),
  message: borderColor => ({
    flex: 1,
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
  }),
  messageAvatar: {
    height: 46,
    width: 46,
    borderRadius: 23,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: color => ({
    fontSize: 17,
    fontWeight: '500',
    color: color,
  }),
  messageText: {
    color: '#909093',
    fontSize: 15,
  },
});
