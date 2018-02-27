import React from 'react';
import HomeScreen from '../../screen/HomeScreen/HomeScreen.component';
import ListAllPeerScreen from '../../screen/ListAllPeerScreen/ListAllPeerScreen.component';
import ListChannelPeerScreen from '../../screen/ListChannelPeerScreen/ListChannelPeerScreen.component';
import ConnectionScreen from '../../screen/ConnectionScreen/ConnectionScreen.component';
import BroadcastScreen from '../../screen/BroadcastScreen/BroadcastScreen.component';
import MessageScreen from '../../screen/MessageScreen/MessageScreen.component';

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'Home',
    };
    this.switchScreen = this.switchScreen.bind(this);
  }
  render() {
    const { activeScreen } = this.state;
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen switchScreen={this.switchScreen} />;
      case 'ListAllPeer':
        return <ListAllPeerScreen goBack={() => { this.switchScreen('Home'); }} />;
      case 'ListChannelPeer':
        return <ListChannelPeerScreen goBack={() => { this.switchScreen('Home'); }} />;
      case 'Connection':
        return <ConnectionScreen goBack={() => { this.switchScreen('Home'); }} />;
      case 'Broadcast':
        return <BroadcastScreen goBack={() => { this.switchScreen('Home'); }} />;
      case 'Message':
        return <MessageScreen goBack={() => { this.switchScreen('Home'); }} />;
      default:
        console.error(`Navigation error: ${this.state.activeScreen}`);
        return <HomeScreen switchScreen={this.switchScreen} />;
    }
  }
  switchScreen(toScreen) {
    this.setState({
      activeScreen: toScreen,
    });
  }
}

export default MainSection;
