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

const SendMessage = ({themeSettings}) => {
  const [text, setText] = useState('');
  const {color, secondaryColor} = themeSettings;

  return (
    <View style={styles.footerContent}>
      {/* <Image source={require('../icons/send.png')} style={styles.sideIcon} /> */}
      <AttachIcon color={color} />
      <View style={styles.input(secondaryColor)}>
        <TextInput
          style={styles.inputText(color)}
          placeholder="..."
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {/* <Image
          source={require('../icons/dictation.png')}
          style={styles.voiceIcon}
        /> */}
        <VoiceIcon color={color} />
      </View>
      <SendMessageIcon color={color} />
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
  input: color => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 230,
    height: 34,
    borderColor: color,
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 15,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    marginHorizontal: 20,
  }),
  inputText: color => ({
    color: color,
    width: 175,
    height: '100%',
  }),
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
