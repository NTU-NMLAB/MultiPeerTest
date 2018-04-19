import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultiPeerActions from '../../../../submodule/react-native-multipeer/actions/MultiPeer.action';
import DualStateButton from '../../../dumb/partial/DualStateButton/DualStateButton.component';
import AppConstants from '../../../../constants/App.constant';

class AdvertiseControl extends React.Component {
  render() {
    const {
      selfName,
      isAdvertising,
      advertise,
      hide,
    } = this.props;
    return (
      <DualStateButton
        status={isAdvertising}
        titleOn={AppConstants.TEXT.P2P_OP.ADVERTISE}
        titleOff={AppConstants.TEXT.P2P_OP.ADVERTISE}
        onPressOn={() => advertise({ name: selfName })}
        onPressOff={hide}
      />
    );
  }
}

const mapStateToProps = state => ({
  selfName: state.multipeer.selfName,
  isAdvertising: state.multipeer.isAdvertising,
});

const mapDispatchToProps = dispatch => ({
  advertise: info => dispatch(MultiPeerActions.advertise(info)),
  hide: () => dispatch(MultiPeerActions.hide()),
});

AdvertiseControl.propTypes = {
  selfName: PropTypes.string.isRequired,
  isAdvertising: PropTypes.bool.isRequired,
  advertise: PropTypes.func,
  hide: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertiseControl);

