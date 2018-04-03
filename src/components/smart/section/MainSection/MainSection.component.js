import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NaviActions from '../../../../actions/Navi/Navi.action';
import HomeScreen from '../../screen/HomeScreen/HomeScreen.component';
import ListAllPeerScreen from '../../screen/ListAllPeerScreen/ListAllPeerScreen.component';
import ListChannelPeerScreen from '../../screen/ListChannelPeerScreen/ListChannelPeerScreen.component';
import ConnectionScreen from '../../screen/ConnectionScreen/ConnectionScreen.component';
import BroadcastScreen from '../../screen/BroadcastScreen/BroadcastScreen.component';
import MessageScreen from '../../screen/MessageScreen/MessageScreen.component';

class MainSection extends React.Component {
  render() {
    const { screen, switchToScreen, goHome } = this.props;
    switch (screen) {
      case 'Home':
        return <HomeScreen switchToScreen={switchToScreen} />;
      case 'ListAllPeer':
        return <ListAllPeerScreen goHome={goHome} />;
      case 'ListChannelPeer':
        return <ListChannelPeerScreen goHome={goHome} />;
      case 'Connection':
        return <ConnectionScreen goHome={goHome} />;
      case 'Broadcast':
        return <BroadcastScreen goHome={goHome} />;
      case 'Message':
        return <MessageScreen goHome={goHome} />;
      default:
        console.error(`Navigation error: ${screen}`);
        return <HomeScreen switchToScreen={switchToScreen} />;
    }
  }
}

const mapStateToProps = state => ({
  screen: state.navi.screen,
});

const mapDispatchToProps = dispatch => ({
  switchToScreen: screen => dispatch(NaviActions.switchToScreen(screen)),
  goHome: () => dispatch(NaviActions.goHome()),
});

MainSection.propTypes = {
  screen: PropTypes.string.isRequired,
  switchToScreen: PropTypes.func,
  goHome: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
