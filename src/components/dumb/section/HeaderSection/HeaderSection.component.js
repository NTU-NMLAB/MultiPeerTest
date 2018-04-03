import React from 'react';
import { View, Text } from 'react-native';
import AppConstants from '../../../../constants/App.constant';
import styles from './HeaderSection.style';

const HeaderSection = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {AppConstants.APP_NAME}
    </Text>
  </View>
);

export default HeaderSection;
