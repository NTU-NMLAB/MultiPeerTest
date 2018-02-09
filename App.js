import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const MultipeerConnectivity = require('react-native-multipeer');

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

function getStateFromSources() {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return {
    dataSource: ds.cloneWithRows(MultipeerConnectivity.getAllPeers()),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromSources();
    this.renderRow = this.renderRow.bind(this);
    this.invitePeer = this.constructor.invitePeer.bind(this);
    this.onPeerChange = this.onPeerChange.bind(this);
  }

  componentDidMount() {
    MultipeerConnectivity.on('peerFound', this.onPeerChange);
    MultipeerConnectivity.on('peerLost', this.onPeerChange);
    MultipeerConnectivity.on('invite', ((event) => {
      // Automatically accept invitations
      MultipeerConnectivity.rsvp(event.invite.id, true);
    }));
    MultipeerConnectivity.on('peerConnected', (event) => {
      alert(`${event.peer.id} - connected!`);
    });
    MultipeerConnectivity.advertise('channel1', { name: `User-${Math.round(1e6 * Math.random())}` });
    MultipeerConnectivity.browse('channel1');
  }

  renderRow(peer) {
    return (
      <TouchableHighlight onPress={() => this.constructor.invitePeer(peer)} style={styles.row}>
        <View>
          <Text>{peer.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  static invitePeer(peer) {
    MultipeerConnectivity.invite(peer.id);
  }

  onPeerChange() {
    this.setState(getStateFromSources());
  }

  render() {
    const { dataSource } = this.state;
    return (
      <View style={styles.container}>
        <ListView
          style={styles.peers}
          dataSource={dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}

export default App;
