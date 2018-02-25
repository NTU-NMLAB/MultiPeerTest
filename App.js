import React from 'react';
import { View } from 'react-native';
import HeaderSection from './src/component/smart/section/HeaderSection/HeaderSection.component';
import MainSection from './src/component/smart/section/MainSection/MainSection.component';
import styles from './App.style';

const MultiPeerTestApp = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <HeaderSection />
    </View>
    <View style={styles.main}>
      <MainSection />
    </View>
  </View>
);

export default MultiPeerTestApp;
