import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import MultipeerConnectivity from '../../../../submodule/react-native-multipeer';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListAllPeerScreen.style';

class ListAllPeerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selfId: `${AppConstants.USER_ID_PREFIX}${Math.round(1e6 * Math.random())}`,
      peerListDataSource: ListAllPeerScreen.getInitPeerListDataSource(),
    };
    this.onPeerChange = this.onPeerChange.bind(this);
    this.refreshPeerListDataSource = this.refreshPeerListDataSource.bind(this);
  }
  componentDidMount() {
    MultipeerConnectivity.on('peerFound', this.onPeerChange);
    MultipeerConnectivity.on('peerLost', this.onPeerChange);
    MultipeerConnectivity.advertise(AppConstants.DEFAULT_CHANNEL, { name: this.state.selfId });
    MultipeerConnectivity.browse(AppConstants.DEFAULT_CHANNEL);
  }
  render() {
    const { goBack } = this.props;
    const { peerListDataSource, selfId } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.selfIdTxtContainer}>
            <Text style={styles.selfIdTxt}>{AppConstants.TEXT.COMMON.SELF_ID}{selfId}</Text>
          </View>
          <ListView
            style={styles.peerIdList}
            dataSource={peerListDataSource}
            renderRow={ListAllPeerScreen.renderRow}
            enableEmptySections
          />
       </View>
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
  onPeerChange() {
    this.refreshPeerListDataSource();
  }
  refreshPeerListDataSource() {
    const newDataSource = MultipeerConnectivity.getAllPeers();
    this.setState({
      peerListDataSource: this.state.peerListDataSource.cloneWithRows(newDataSource),
    });
  }
  static getInitPeerListDataSource() {
    return new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  static renderRow(peer) {
    return (
      <View style={styles.peerIdListItem}>
        <Text style={styles.peerIdListItemTxt}>{peer.name}</Text>
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
