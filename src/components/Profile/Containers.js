import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ActionButton = ({name, children}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.actionItem}>
        <View style={styles.actionCircle}>{children}</View>
        <Text style={{marginTop: 3}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const SettingItem = ({children, title}) => {
  return (
    <View style={styles.settingContainer}>
      <View style={styles.settingItem}>
        {children[0]}
        <Text style={{fontSize: 16, marginLeft: 15}}>{title}</Text>
      </View>
      {children[1]}
    </View>
  );
};

export const TextInput = ({value}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.settingClickableText}>
        <Text style={styles.settingText}>{value}</Text>
        <Text style={styles.goTo}>{'»'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontFamily: 'Kailasa-Bold',
    marginTop: 8,
  },
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
  settingClickableText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    color: 'rgba(0, 0, 0, 0.35)',
    fontSize: 16,
  },
  goTo: {
    color: 'rgba(0, 0, 0, 0.35)',
    fontSize: 16,
    marginLeft: 5,
  },
});
