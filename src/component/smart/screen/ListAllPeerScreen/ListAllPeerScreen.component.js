import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListAllPeerScreen.style';

class ListAllPeerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          ListAllPeerScreen
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

ListAllPeerScreen.propTypes = {
  goBack: PropTypes.func,
};

ListAllPeerScreen.defaultProps = {
  goBack: () => {},
};

export default ListAllPeerScreen;
