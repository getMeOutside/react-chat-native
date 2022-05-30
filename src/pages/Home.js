import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
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

const HomeScreen = (props) => {
  const count = useSelector(state => state.toolkit.count);

  return (
    <View style={styles.body}>
      <View style={styles.messages}>
        <FlatList
          data={DATA}
          renderItem={Message}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <SendMessage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  messages: {
    flex: 8,
  },
  footer: {
    flex: 1,
    backgroundColor: 'fff',
  },
});

export default HomeScreen;
