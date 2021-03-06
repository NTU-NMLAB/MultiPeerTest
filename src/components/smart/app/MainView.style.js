import { StyleSheet } from 'react-native';
import AppConstants from '../../../constants/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 6,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG_SHALLOW,
  },
});

export default styles;
