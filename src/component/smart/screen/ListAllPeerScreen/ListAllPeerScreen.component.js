import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SelfNameBox from '../../partial/SelfNameBox/SelfNameBox.component';
import PeerList from '../../partial/PeerList/PeerList.component';
import Button from '../../../dumb/Button/Button.component';
import AppConstants from '../../../../constant/App.constant';
import styles from './ListAllPeerScreen.style';

class ListAllPeerScreen extends React.Component {
  render() {
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <SelfNameBox />
        <View style={styles.content}>
          <PeerList channel={AppConstants.DEFAULT_CHANNEL} />
        </View>
        <View style={styles.backBtn}>
          <Button
            title={AppConstants.TEXT.COMMON.GO_BACK}
            onPress={() => goBack && goBack()}
          />
        </View>
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
