import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListChannelPeerScreen.style';

class ListChannelPeerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          ListChannelPeerScreen
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

ListChannelPeerScreen.propTypes = {
  goBack: PropTypes.func,
};

ListChannelPeerScreen.defaultProps = {
  goBack: () => {},
};

export default ListChannelPeerScreen;
