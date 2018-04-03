import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SelfNameBox from '../../partial/SelfNameBox/SelfNameBox.component';
import PeerList from '../../partial/PeerList/PeerList.component';
import Button from '../../../dumb/partial/Button/Button.component';
import AppConstants from '../../../../constants/App.constant';
import styles from './ListAllPeerScreen.style';

class ListAllPeerScreen extends React.Component {
  render() {
    const { goHome } = this.props;
    return (
      <View style={styles.container}>
        <SelfNameBox />
        <View style={styles.content}>
          <PeerList channel={AppConstants.DEFAULT_CHANNEL} />
        </View>
        <View style={styles.backBtn}>
          <Button
            title={AppConstants.TEXT.COMMON.GO_BACK}
            onPress={() => goHome && goHome()}
          />
        </View>
      </View>
    );
  }
}

ListAllPeerScreen.propTypes = {
  goHome: PropTypes.func,
};

ListAllPeerScreen.defaultProps = {
  goHome: () => {},
};

export default ListAllPeerScreen;
