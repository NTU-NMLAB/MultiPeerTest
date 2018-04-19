import React from 'react';
import { View } from 'react-native';
import SelfNameBox from '../../../smart/partial/SelfNameBox/SelfNameBox.component';
import AdvertiseControl from '../../../smart/partial/AdvertiseControl/AdvertiseControl.component';
import BrowseControl from '../../../smart/partial/BrowseControl/BrowseControl.component';
import PeerList from '../../../smart/partial/PeerList/PeerList.component';
import styles from './MainSection.style';

const MainSection = () => (
  <View style={styles.container}>
    <SelfNameBox />
    <View style={styles.controlPanel}>
      <View style={styles.controlElement}>
        <AdvertiseControl />
      </View>
      <View style={styles.controlElement}>
        <BrowseControl />
      </View>
    </View>
    <View style={styles.peerListWrapper}>
      <PeerList />
    </View>
  </View>
);

export default MainSection;
