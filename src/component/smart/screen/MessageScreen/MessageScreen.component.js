import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import AppConstants from '../../../../constant/App.constant';
import styles from './MessageScreen.style';

class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          MessageScreen
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => goBack && goBack()}
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
  goBack: PropTypes.func,
};

MessageScreen.defaultProps = {
  goBack: () => {},
};

export default MessageScreen;
