import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constants/App.constant';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerOn: {
    backgroundColor: AppConstants.STYLE.COLOR.BTN_ON,
  },
  containerOff: {
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
  },
  title: {
    fontSize: 20,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
