import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constant/App.constant';

const styles = StyleSheet.create({
  container: {
    height: 24,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
