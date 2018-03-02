import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style';

const Button = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress()}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  title: '',
  onPress: () => {},
};

export default Button;
