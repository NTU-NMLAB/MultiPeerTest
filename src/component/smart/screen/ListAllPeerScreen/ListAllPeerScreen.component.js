import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import SelfNameBox from '../../partial/SelfNameBox/SelfNameBox.component';
import MultipeerConnectivity from '../../../../submodule/react-native-multipeer';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListAllPeerScreen.style';

class ListAllPeerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peerListDataSource: ListAllPeerScreen.getInitPeerListDataSource(),
    };
    this.refreshPeerListDataSource = this.refreshPeerListDataSource.bind(this);
    this.onPeerFound = () => { this.refreshPeerListDataSource(); };
    this.onPeerLost = () => { this.refreshPeerListDataSource(); };
  }
  componentWillMount() {
    MultipeerConnectivity.on('peerFound', this.onPeerFound);
    MultipeerConnectivity.on('peerLost', this.onPeerLost);
    MultipeerConnectivity.advertise(AppConstants.DEFAULT_CHANNEL);
    MultipeerConnectivity.browse(AppConstants.DEFAULT_CHANNEL);
  }
  componentWillUnmount() {
    MultipeerConnectivity.removeListener('peerFound', this.onPeerFound);
    MultipeerConnectivity.removeListener('peerLost', this.onPeerLost);
    MultipeerConnectivity.hide(AppConstants.DEFAULT_CHANNEL);
  }
  render() {
    const { goBack } = this.props;
    const { peerListDataSource } = this.state;
    return (
      <View style={styles.container}>
        <SelfNameBox />
        <View style={styles.content}>
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
