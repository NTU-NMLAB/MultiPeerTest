import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constants/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
  },
  text: {
    fontSize: 36,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
