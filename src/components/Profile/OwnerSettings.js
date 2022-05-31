import React from 'react';
import {Switch} from 'react-native';
import {SettingItem, TextInput} from './Containers';
import DarkModeIcon from '../icons/DarkMode';
import TagIcon from '../icons/NickName';
import PhoneIcon from '../icons/Phone';

const OwnerSettings = ({toggleSwitch, secondaryColor, isEnabled}) => {
  return (
    <>
      <SettingItem title={'Темная тема'}>
        <DarkModeIcon />
        <Switch
          trackColor={{false: 'whitesmoke', true: '#2ecc71'}}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SettingItem>
      <SettingItem title={'Никнейм'}>
        <TagIcon />
        <TextInput value={'chat/cat'} color={secondaryColor} />
      </SettingItem>
      <SettingItem title={'Телефон'}>
        <PhoneIcon />
        <TextInput value={'79514000000'} color={secondaryColor} />
      </SettingItem>
    </>
  );
};

export default OwnerSettings;
