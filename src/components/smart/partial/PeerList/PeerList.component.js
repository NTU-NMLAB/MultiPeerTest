import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import MultipeerConnectivity from '../../../../submodule/react-native-multipeer';
import styles from './PeerList.style';
import AppConstants from '../../../../constants/App.constant';

class PeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: PeerList.getInitDataSource(),
    };
    this.refreshDataSource = this.refreshDataSource.bind(this);
    this.onPeerFound = () => { this.refreshDataSource(); };
    this.onPeerLost = () => { this.refreshDataSource(); };
    this.onInvite = (event) => {
      MultipeerConnectivity.rsvp(event.invite.id, true);
    };
    this.onPeerConnected = () => {
      this.refreshDataSource();
    };
    this.onPeerDisconnected = () => {
      this.refreshDataSource();
    };
  }
  componentWillMount() {
    MultipeerConnectivity.on('peerFound', this.onPeerFound);
    MultipeerConnectivity.on('peerLost', this.onPeerLost);
    MultipeerConnectivity.on('invite', this.onInvite);
    MultipeerConnectivity.on('peerConnected', this.onPeerConnected);
    MultipeerConnectivity.on('peerDisconnected', this.onPeerDisconnected);
    MultipeerConnectivity.advertise(this.props.channel);
    MultipeerConnectivity.browse(this.props.channel);
  }
  componentWillUnmount() {
    MultipeerConnectivity.removeListener('peerFound', this.onPeerFound);
    MultipeerConnectivity.removeListener('peerLost', this.onPeerLost);
    MultipeerConnectivity.removeListener('invite', this.onInvite);
    MultipeerConnectivity.removeListener('peerConnected', this.onPeerConnected);
    MultipeerConnectivity.removeListener('peerDisconnected', this.onPeerDisconnected);
    MultipeerConnectivity.hide(this.props.channel);
    MultipeerConnectivity.stopBrowseAndClearPeers(this.props.channel);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.channel !== this.props.channel) {
      MultipeerConnectivity.hide(prevProps.channel);
      MultipeerConnectivity.stopBrowseAndClearPeers(prevProps.channel);
      MultipeerConnectivity.advertise(this.props.channel);
      MultipeerConnectivity.browse(this.props.channel);
      this.refreshDataSource();
    }
  }
  render() {
    const { dataSource } = this.state;
    const { connectable } = this.props;
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={connectable ? PeerList.renderConnectableRow : PeerList.renderRow}
        enableEmptySections
      />
    );
  }
  refreshDataSource() {
    const newDataSource = [].concat(MultipeerConnectivity.getAllPeers());
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newDataSource),
    });
  }
  static getInitDataSource() {
    return new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
  }
  static renderRow(peer) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemNameText}>{peer.name}</Text>
      </View>
    );
  }
  static renderConnectableRow(peer) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => { PeerList.onToggleConnection(peer); }}
      >
        <Text
          style={peer.connected ? styles.listItemNameTextConnected : styles.listItemNameText}
        >
          {peer.name}
        </Text>
      </TouchableOpacity>
    );
  }
  static onToggleConnection(peer) {
    if (peer.connected) {
      MultipeerConnectivity.disconnect();
    } else {
      MultipeerConnectivity.invite(peer);
    }
  }
}

PeerList.propTypes = {
  channel: PropTypes.string,
  connectable: PropTypes.bool,
};

PeerList.defaultProps = {
  channel: AppConstants.DEFAULT_CHANNEL,
  connectable: false,
};

export default PeerList;
