import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SelfNameBox from '../../partial/SelfNameBox/SelfNameBox.component';
import ChannelInput from '../../partial/ChannelInput/ChannelInput.component';
import PeerList from '../../partial/PeerList/PeerList.component';
import Button from '../../../dumb/Button/Button.component';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListChannelPeerScreen.style';

class ListChannelPeerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: AppConstants.DEFAULT_CHANNEL,
    };
  }
  render() {
    const { goBack } = this.props;
    const { channel } = this.state;
    return (
      <View style={styles.container}>
        <SelfNameBox />
        <View style={styles.channelInputWrapper}>
          <ChannelInput
            channel={channel}
            updateChannel={(newChannel) => {
              this.setState({ channel: newChannel });
            }}
          />
        </View>
        <View style={styles.peerListWrapper}>
          <PeerList channel={channel} />
        </View>
        <View style={styles.backBtnWrapper}>
          <Button
            title={AppConstants.TEXT.COMMON.GO_BACK}
            onPress={() => goBack && goBack()}
          />
        </View>
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
