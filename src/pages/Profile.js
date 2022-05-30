import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {ActionButton} from '../components/Profile/Containers';
import OwnerSettings from '../components/Profile/OwnerSettings';
import ProfileIcon from '../components/icons/Profile';
import SoundIcon from '../components/icons/Sound';
import VideoIcon from '../components/icons/Video';
import EditIcon from '../components/icons/Edit';

import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../store/themeSlice';

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const {dark, colors} = useSelector(state => state.theme);
  const themeSettings = dark ? colors.dark : colors.white;

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch(toggle());
  };

  return (
    <View style={styles.body(themeSettings.backgroundColor)}>
      <View style={styles.profileInfo}>
        <View style={styles.infoContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              style={{width: 140, height: 140, borderRadius: 70}}
              source={{
                uri: 'https://api.amic.ru/uploads/news/images/E6096F4F5320463881F82430E0CEFD76.jpg',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.name(themeSettings.color)}>Чмоня Уважаемый</Text>
          <Text style={styles.status(themeSettings.secondaryColor)}>
            Online
          </Text>
          <View style={styles.actions}>
            <ActionButton name={'Звонок'} themeSettings={themeSettings}>
              <VideoIcon color={themeSettings.color} />
            </ActionButton>
            <ActionButton name={'Профиль'} themeSettings={themeSettings}>
              <ProfileIcon color={themeSettings.color} />
            </ActionButton>
            <ActionButton name={'Звук'} themeSettings={themeSettings}>
              <SoundIcon color={themeSettings.color} />
            </ActionButton>
            <ActionButton name={'Измен.'} themeSettings={themeSettings}>
              <EditIcon color={themeSettings.color} />
            </ActionButton>
          </View>
        </View>
      </View>
      <View style={styles.settings}>
        <OwnerSettings
          toggleSwitch={toggleSwitch}
          isEnabled={isEnabled}
          themeSettings={themeSettings}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: themeBackground => ({
    flex: 1,
    backgroundColor: themeBackground,
    height: '100%',
  }),
  profileInfo: {
    height: 280,
    marginTop: 20,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: themeColor => ({
    fontSize: 20,
    color: themeColor,
    // fontFamily: 'SFProDisplay-Bold',
    // fontFamily: 'Pacifico',
    fontFamily: 'Kailasa-Bold',
    marginTop: 8,
  }),
  status: secondaryColor => ({
    fontSize: 15,
    color: secondaryColor,
  }),
  actions: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  settingCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    height: 20,
  },
  settings: {
    marginTop: 20,
  },
});

export default ProfileScreen;
