import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import AppConstants from '../../../../constants/App.constant';
import styles from './HomeScreen.style';

const HomeScreen = (props) => {
  const { switchToScreen } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchToScreen && switchToScreen('ListAllPeer')}
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonTitleText}>
            {AppConstants.TEXT.HOME_SCREEN.LIST_ALL_PEER.TITLE}
          </Text>
        </View>
        <View style={styles.buttonDesc}>
          <Text style={styles.buttonDescText}>
            {AppConstants.TEXT.HOME_SCREEN.LIST_ALL_PEER.DESC}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchToScreen && switchToScreen('ListChannelPeer')}
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonTitleText}>
            {AppConstants.TEXT.HOME_SCREEN.LIST_CHANNEL_PEER.TITLE}
          </Text>
        </View>
        <View style={styles.buttonDesc}>
          <Text style={styles.buttonDescText}>
            {AppConstants.TEXT.HOME_SCREEN.LIST_CHANNEL_PEER.DESC}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchToScreen && switchToScreen('Connection')}
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonTitleText}>
            {AppConstants.TEXT.HOME_SCREEN.CONNECTION.TITLE}
          </Text>
        </View>
        <View style={styles.buttonDesc}>
          <Text style={styles.buttonDescText}>
            {AppConstants.TEXT.HOME_SCREEN.CONNECTION.DESC}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchToScreen && switchToScreen('Broadcast')}
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonTitleText}>
            {AppConstants.TEXT.HOME_SCREEN.BROADCAST.TITLE}
          </Text>
        </View>
        <View style={styles.buttonDesc}>
          <Text style={styles.buttonDescText}>
            {AppConstants.TEXT.HOME_SCREEN.BROADCAST.DESC}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchToScreen && switchToScreen('Message')}
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonTitleText}>
            {AppConstants.TEXT.HOME_SCREEN.MESSAGE.TITLE}
          </Text>
        </View>
        <View style={styles.buttonDesc}>
          <Text style={styles.buttonDescText}>
            {AppConstants.TEXT.HOME_SCREEN.MESSAGE.DESC}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.propTypes = {
  switchToScreen: PropTypes.func,
};

HomeScreen.defaultProps = {
  switchToScreen: () => {},
};

export default HomeScreen;
