import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import VoiceIcon from './icons/VoiceIcon';
import AttachIcon from './icons/AttachIcon';
import SendMessageIcon from './icons/SendMessageIcon';

const SendMessage = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.footerContent}>
      {/* <Image source={require('../icons/send.png')} style={styles.sideIcon} /> */}
      <AttachIcon />
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="..."
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {/* <Image
          source={require('../icons/dictation.png')}
          style={styles.voiceIcon}
        /> */}
        <VoiceIcon />
      </View>
      <SendMessageIcon />
      {/* <Image source={require('../icons/send.png')} style={styles.sideIcon} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 230,
    height: 34,
    borderColor: '#rgba(51,51,51,.1)',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 15,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    marginHorizontal: 20,
  },
  inputText: {
    width: 175,
    height: '100%',
  },
  voiceIcon: {
    height: 25,
    width: 25,
  },
  sideIcon: {
    height: 28,
    width: 28,
  },
});

export default SendMessage;
