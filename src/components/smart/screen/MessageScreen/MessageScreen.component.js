import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import AppConstants from '../../../../constants/App.constant';
import styles from './MessageScreen.style';

class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { goHome } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          MessageScreen
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => goHome && goHome()}
        >
          <Text style={styles.backButtonText}>
            {AppConstants.TEXT.COMMON.GO_BACK}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MessageScreen.propTypes = {
  goHome: PropTypes.func,
};

MessageScreen.defaultProps = {
  goHome: () => {},
};

export default MessageScreen;
