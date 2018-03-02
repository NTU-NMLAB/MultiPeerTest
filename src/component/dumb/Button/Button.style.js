import { StyleSheet } from 'react-native';
import AppConstants from '../../../constant/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
    borderRadius: 10,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
