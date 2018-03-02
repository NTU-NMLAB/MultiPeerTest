import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ListView } from 'react-native';
import MultipeerConnectivity from '../../../../submodule/react-native-multipeer';
import styles from './PeerList.style';
import AppConstants from '../../../../constant/App.constant';

class PeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: PeerList.getInitDataSource(),
    };
    this.refreshDataSource = this.refreshDataSource.bind(this);
    this.onPeerFound = () => { this.refreshDataSource(); };
    this.onPeerLost = () => { this.refreshDataSource(); };
  }
  componentWillMount() {
    MultipeerConnectivity.on('peerFound', this.onPeerFound);
    MultipeerConnectivity.on('peerLost', this.onPeerLost);
    MultipeerConnectivity.advertise(this.props.channel);
    MultipeerConnectivity.browse(this.props.channel);
  }
  componentWillUnmount() {
    MultipeerConnectivity.removeListener('peerFound', this.onPeerFound);
    MultipeerConnectivity.removeListener('peerLost', this.onPeerLost);
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
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={PeerList.renderRow}
        enableEmptySections
      />
    );
  }
  refreshDataSource() {
    const newDataSource = MultipeerConnectivity.getAllPeers();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newDataSource),
    });
  }
  static getInitDataSource() {
    return new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  static renderRow(peer) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{peer.name}</Text>
      </View>
    );
  }
}

PeerList.propTypes = {
  channel: PropTypes.string,
};

PeerList.defaultProps = {
  channel: AppConstants.DEFAULT_CHANNEL,
};

export default PeerList;
