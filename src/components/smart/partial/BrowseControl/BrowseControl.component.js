import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultiPeerActions from '../../../../submodule/react-native-multipeer/actions/MultiPeer.action';
import DualStateButton from '../../../dumb/partial/DualStateButton/DualStateButton.component';
import AppConstants from '../../../../constants/App.constant';

class BrowseControl extends React.Component {
  render() {
    const {
      isBrowsing,
      browse,
      stopBrowse,
    } = this.props;
    return (
      <DualStateButton
        status={isBrowsing}
        titleOn={AppConstants.TEXT.P2P_OP.BROWSE}
        titleOff={AppConstants.TEXT.P2P_OP.BROWSE}
        onPressOn={browse}
        onPressOff={stopBrowse}
      />
    );
  }
}

const mapStateToProps = state => ({
  isBrowsing: state.multipeer.isBrowsing,
});

const mapDispatchToProps = dispatch => ({
  browse: () => dispatch(MultiPeerActions.browse()),
  stopBrowse: () => dispatch(MultiPeerActions.stopBrowse()),
});

BrowseControl.propTypes = {
  isBrowsing: PropTypes.bool.isRequired,
  browse: PropTypes.func,
  stopBrowse: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseControl);

