import React, {useState, useRef, useCallback} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderItems, ChatItem} from '../components/Dialogs/Containers';
import Swiper from 'react-native-swiper';

const DialogsScreen = () => {
  const {messages} = useSelector(state => state.toolkit);
  const {messages: groupsMessages} = useSelector(state => state.groupSlice);
  const {messages: exceedMessages} = useSelector(state => state.exceedSlice);
  const [activeTab, setActiveTab] = useState(0);
  const swiper = useRef(null);

  const MemorizedChatItem = useCallback(({item}) => {
    return <ChatItem item={item}/>;
  }, [messages, groupsMessages]);
  // console.log("message=s",messages)
  
  return (
    <View style={styles.body}>
      <HeaderItems activeTab={activeTab} swiper={swiper} />
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        loop={false}
        ref={swiper}
        removeClippedSubviews={false}
        loadMinimal
        loadMinimalSize={2}
        onIndexChanged={index => setActiveTab(index)}>
        <FlatList
          style={styles.slide}
          data={messages}
          renderItem={MemorizedChatItem}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={styles.slide}
          data={exceedMessages}
          renderItem={MemorizedChatItem}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={styles.slide}
          data={groupsMessages}
          renderItem={MemorizedChatItem}
          keyExtractor={item => item.id}
        />
      </Swiper>
      {/* <Text>sdfsdf</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 25,
  },
});

export default DialogsScreen;
