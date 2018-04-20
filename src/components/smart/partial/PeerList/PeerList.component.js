import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, SectionList, TouchableOpacity } from 'react-native';
import styles from './PeerList.style';
import AppConstants from '../../../../constants/App.constant';
import MultiPeerActions from '../../../../submodule/react-native-multipeer/actions/MultiPeer.action';

class PeerList extends React.Component {
  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
    this.onItemPressed = this.onItemPressed.bind(this);
  }
  render() {
    const { peers } = this.props;
    return (
      <SectionList
        style={styles.container}
        renderItem={this.renderItem}
        renderSectionHeader={PeerList.renderSectionHeader}
        sections={PeerList.adaptDataSource(peers)}
        keyExtractor={peer => peer.id}
      />
    );
  }
  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => { this.onItemPressed(item); }}
      >
        <Text
          style={item.connected ? styles.listItemNameTextConnected : styles.listItemNameText}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
  static renderSectionHeader({ section: { title } }) {
    return (
        <Text style={styles.sectionHeadTxt}>{title}</Text>
    );
  }
  static adaptDataSource(peers) {
    const peerArray = Object.values(peers);
    const foundSection = {
      title: AppConstants.TEXT.PEER_LIST_SECTION_TITLE.FOUND,
      data: peerArray.filter(peer => (!peer.connected && !peer.invited && peer.invitationId === '')),
    };
    const inviteOthersSection = {
      title: AppConstants.TEXT.PEER_LIST_SECTION_TITLE.INVITE_OTHERS,
      data: peerArray.filter(peer => (!peer.connected && peer.invited === true)),
    };
    const invitedByOthersSection = {
      title: AppConstants.TEXT.PEER_LIST_SECTION_TITLE.INVITED_BY_OTHERS,
      data: peerArray.filter(peer => (!peer.connected && peer.invitationId !== '')),
    };
    const connectedSection = {
      title: AppConstants.TEXT.PEER_LIST_SECTION_TITLE.CONNECTED,
      data: peerArray.filter(peer => (peer.connected)),
    };
    return [
      foundSection,
      inviteOthersSection,
      invitedByOthersSection,
      connectedSection,
    ].filter(section => section.data.length !== 0);
  }
  onItemPressed(peer) {
    const { selfName, invite, responseInvite } = this.props;
    if (peer.connected || peer.invited) {
      return;
    }
    if (peer.invitationId === '') {
      invite(peer.id, { name: selfName });
    } else {
      responseInvite(peer, true);
    }
  }
}

PeerList.propTypes = {
  selfName: PropTypes.string,
  peers: PropTypes.object,
  invite: PropTypes.func,
  responseInvite: PropTypes.func,
};

const mapStateToProps = state => ({
  selfName: state.multipeer.selfName,
  peers: state.multipeer.peers,
});

const mapDispatchToProps = dispatch => ({
  invite: (peerId, myInfo) => dispatch(MultiPeerActions.invite(peerId, myInfo)),
  responseInvite: (sender, accept) => dispatch(MultiPeerActions.responseInvite(sender, accept)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeerList);
