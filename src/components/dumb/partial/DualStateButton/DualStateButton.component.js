import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './DualStateButton.style';

const DualStateButton = (props) => {
  const {
    status,
    titleOn,
    titleOff,
    onPressOn,
    onPressOff,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, (status ? styles.containerOn : styles.containerOff)]}
      onPress={() => (!status ? onPressOn && onPressOn() : onPressOff && onPressOff())}
    >
      <Text style={[styles.title, (status ? styles.titleOn : styles.titleOff)]}>
        {status ? titleOn : titleOff}
      </Text>
    </TouchableOpacity>
  );
};

DualStateButton.propTypes = {
  status: PropTypes.bool.isRequired,
  titleOn: PropTypes.string,
  titleOff: PropTypes.string,
  onPressOn: PropTypes.func,
  onPressOff: PropTypes.func,
};

DualStateButton.defaultProps = {
  status: true,
  titleOn: '',
  titleOff: '',
  onPressOn: () => {},
  onPressOff: () => {},
};

export default DualStateButton;
