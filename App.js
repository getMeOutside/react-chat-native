/**
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/index';
import {
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import ProfileScreen from './src/pages/Profile';
import HomeScreen from './src/pages/Home';
import DialogsScreen from './src/pages/Dialogs';

import useStorage from './src/hooks/storage';

function LogoTitle() {
  return (
    <Image
      style={{width: 30, height: 30}}
      source={{uri: 'https://exceed-team.com/assets/images/preview.png'}}
    />
  );
}

const renderProfileButton = navigation => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Dialogs')}>
      <View style={styles.chats}>
        <Image
          style={{width: 25, height: 25}}
          source={require('./src/icons/chats.png')}
        />
        <View style={styles.counter}>
          <Text>222</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();
// screenOptions={{headerShown: false}} for Stack.Navigator
const App = () => {
  const [username, setUsername] = useStorage('user');
  // const [auth, setAuth] = useState({});

  useEffect(() => {
    setUsername({
      name: 'test',
    });
    console.log('userNAME22222+', username);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {false ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={props => ({
                  title: 'Chat',
                  headerStyle: {
                    backgroundColor: '#F1F1F2',
                  },
                  headerTitle: () => <LogoTitle />,
                  headerLeft: () => renderProfileButton(props.navigation),
                  headerRight: () => (
                    <Button
                      onPress={() => props.navigation.navigate('Profile')}
                      title="Profile"
                      style={styles.editProfile}
                    />
                  ),
                })}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Dialogs" component={DialogsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  counter: {
    height: 25,
    backgroundColor: '#61dafb',
    borderRadius: 17 / 2,
    padding: 4,
    marginLeft: 5,
  },
  editProfile: {
    fontSize: 16,
  },
  chats: {
    flexDirection: 'row',
  },
});

export default App;
