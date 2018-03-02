import React from 'react';
import { View, Text } from 'react-native';
import MultipeerConnectivity from '../../../../submodule/react-native-multipeer';
import styles from './SelfNameBox.style';

const SelfNameBox = () => {
  const selfName = MultipeerConnectivity.getSelfName();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selfName}</Text>
    </View>
  );
};

export default SelfNameBox;
