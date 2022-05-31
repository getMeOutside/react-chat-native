import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';

import Message from '../components/Message';
import SendMessage from '../components/SendMessage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'tedt1 dfs df',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aaff6233',
    owner: true,
    text: 'Second Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    text: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    text: 'Third Ite sdf sdf sd sd s dfsd sdf sd fsd  sdm',
  },
];

const HomeScreen = () => {
  // const count = useSelector(state => state.toolkit.count);
  const {dark, colors} = useSelector(state => state.theme);
  const themeSettings = dark ? colors.dark : colors.white;
  //если на др. устройствах keyboardVerticalOffset работает некорректно с инпут не видно
  //то нужно написать свою функцию для адаптивного измерения высоты девайса
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={78}
      style={styles.container}>
      <View style={styles.body(themeSettings.backgroundColor)}>
        <View style={styles.messages}>
          <FlatList
            data={DATA}
            renderItem={item => (
              <Message item={item.item} themeSettings={themeSettings} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.footer}>
          <SendMessage themeSettings={themeSettings} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: backgroundColor => ({
    flex: 1,
    backgroundColor: backgroundColor,
  }),
  messages: {
    flex: 8,
  },
  footer: {
    flex: 1,
    backgroundColor: 'fff',
  },
});

export default HomeScreen;
