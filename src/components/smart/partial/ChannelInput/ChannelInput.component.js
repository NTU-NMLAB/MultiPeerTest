import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import AppConstants from '../../../../constants/App.constant';
import styles from './ChannelInput.style';

const browseImg = require('../../../../asset/images/browse.png');

class ChannelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tmpChannel: props.channel,
    };
    this.onInspectChannelName = this.onInspectChannelName.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder="Input Channel..."
          underlineColorAndroid='transparent'
          onChangeText={(tmpChannel) => { this.setState({ tmpChannel }); }}
          value={this.state.tmpChannel}
        />
        <TouchableOpacity
          style={styles.browseBtn}
          onPress={this.onInspectChannelName}>
          <Image
            style={styles.browseBtnImg}
            source={ browseImg }
            resizeMode="contain" />
        </TouchableOpacity>
      </View>
    );
  }
  onInspectChannelName() {
    const inspectResult = ChannelInput.inspectChannelName(this.state.tmpChannel);
    if (inspectResult === 'pass') {
      this.props.updateChannel(this.state.tmpChannel);
    } else {
      Alert.alert('Invalid Channel Name', inspectResult);
      this.setState({
        tmpChannel: this.props.channel,
      });
    }
  }
  static inspectChannelName(channel) {
    if (channel.length <= 0 || channel.length > 15) {
      return 'Must be 1–15 characters long';
    }
    if (!/^[a-z0-9-]+$/.test(channel)) {
      return 'Can contain only ASCII lowercase letters, numbers, and hyphens';
    }
    if (!/[a-z]/.test(channel)) {
      return 'Must contain at least one ASCII letter';
    }
    if (channel[0] === '-') {
      return 'Must not begin with a hyphen';
    }
    if (channel.slice(-1) === '-') {
      return 'Must not end with a hyphen';
    }
    if (channel.indexOf('--') !== -1) {
      return 'Must not contain hyphens adjacent to other hyphens';
    }
    return 'pass';
  }
}

ChannelInput.propTypes = {
  channel: PropTypes.string,
  updateChannel: PropTypes.func,
};

ChannelInput.defaultProps = {
  channel: AppConstants.DEFAULT_CHANNEL,
  updateChannel: () => {},
};

export default ChannelInput;
