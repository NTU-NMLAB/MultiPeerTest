import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './SelfNameBox.style';

const SelfNameBox = (props) => {
  const { selfName } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selfName}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  selfName: state.multipeer.selfName,
});

SelfNameBox.propTypes = {
  selfName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(SelfNameBox);
