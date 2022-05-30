import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ActionButton = ({name, themeSettings, children}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.actionItem}>
        <View style={styles.actionCircle}>{children}</View>
        <Text style={styles.name(themeSettings)}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const SettingItem = ({children, color, title}) => {
  return (
    <View style={styles.settingContainer}>
      <View style={styles.settingItem}>
        {children[0]}
        <Text style={styles.title(color)}>{title}</Text>
      </View>
      {children[1]}
    </View>
  );
};

export const TextInput = ({value, color}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.settingClickableText}>
        <Text style={styles.settingText(color)}>{value}</Text>
        <Text style={styles.goTo(color)}>{'»'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: themeSettings => ({
    marginTop: 3,
    color: themeSettings.color,
  }),
  actionItem: {
    alignItems: 'center',
  },
  actionCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomColor: 'rgba(0, 0, 0, 0.04)',
    borderBottomWidth: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: color => ({
    color: color,
    fontSize: 16,
    marginLeft: 15,
  }),
  settingClickableText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: color => ({
    color: color,
    fontSize: 16,
  }),
  goTo: color => ({
    color: color,
    fontSize: 16,
    marginLeft: 5,
  }),
});
