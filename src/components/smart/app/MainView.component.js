import React from 'react';
import { View } from 'react-native';
import HeaderSection from '../../dumb/section/HeaderSection/HeaderSection.component';
import MainSection from '../section/MainSection/MainSection.component';
import styles from './MainView.style';

const MainView = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <HeaderSection />
    </View>
    <View style={styles.main}>
      <MainSection />
    </View>
  </View>
);

export default MainView;
