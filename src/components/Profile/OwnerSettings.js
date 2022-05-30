import React from 'react';
import {Switch} from 'react-native';
import {SettingItem, TextInput} from './Containers';
import DarkModeIcon from '../icons/DarkMode';
import TagIcon from '../icons/NickName';
import PhoneIcon from '../icons/Phone';

const OwnerSettings = ({toggleSwitch, themeSettings, isEnabled}) => {
  return (
    <>
      <SettingItem title={'Темная тема'} color={themeSettings.color}>
        <DarkModeIcon />
        <Switch
          trackColor={{false: 'whitesmoke', true: '#2ecc71'}}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SettingItem>
      <SettingItem title={'Никнейм'} color={themeSettings.color}>
        <TagIcon />
        <TextInput value={'chat/cat'} color={themeSettings.secondaryColor} />
      </SettingItem>
      <SettingItem title={'Телефон'} color={themeSettings.color}>
        <PhoneIcon />
        <TextInput value={'79514000000'} color={themeSettings.secondaryColor} />
      </SettingItem>
    </>
  );
};

export default OwnerSettings;
