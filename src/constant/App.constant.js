const AppConstants = {
  APP_NAME: 'MultiPeerTest',
  STYLE: {
    COLOR: {
      MAIN_BG: '#68705c',
      TEXT: '#feffff',
    },
  },
  TEXT: {
    COMMON: {
      GO_BACK: 'Back',
      SELF_ID: 'Self ID: ',
    },
    HOME_SCREEN: {
      LIST_ALL_PEER: {
        TITLE: 'List All Peers',
        DESC: 'List all nearby peers',
      },
      LIST_CHANNEL_PEER: {
        TITLE: 'List Channel Peers',
        DESC: 'List all peers in the same channel',
      },
      CONNECTION: {
        TITLE: 'Connection',
        DESC: 'Connect to specific peer, and list all peer\'s status',
      },
      BROADCAST: {
        TITLE: 'Broadcast',
        DESC: 'Send message to all connected peers',
      },
      MESSAGE: {
        TITLE: 'Message',
        DESC: 'Send message to specific peer',
      },
    },
  },
  DEFAULT_CHANNEL: 'channel1',
};

export default AppConstants;
