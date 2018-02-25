import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import AppConstants from '../../../../constant/App.constant';
import styles from './HomeScreen.style';

const HomeScreen = (props) => {
  const { switchScreen } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => switchScreen && switchScreen('ListAllPeer')}
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
        onPress={() => switchScreen && switchScreen('ListChannelPeer')}
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
        onPress={() => switchScreen && switchScreen('Connection')}
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
        onPress={() => switchScreen && switchScreen('Broadcast')}
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
        onPress={() => switchScreen && switchScreen('Message')}
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
  switchScreen: PropTypes.func,
};

HomeScreen.defaultProps = {
  switchScreen: () => {},
};

export default HomeScreen;
